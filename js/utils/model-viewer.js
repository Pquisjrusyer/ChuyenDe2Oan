/* ========================================================
   THREE.JS 3D MODEL VIEWER FOR CHARACTER DOSSIER
   ======================================================== */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class CharacterModelViewer {
  constructor(containerElement) {
    this.container = containerElement;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.mixer = null;
    this.clock = new THREE.Clock();
    this.currentModel = null;
    this.animationFrameId = null;
    this.loader = new GLTFLoader();
    this.isDisposed = false;
    this.isPaused = false;

    this.init();
  }

  init() {
    const width = this.container.clientWidth || 500;
    const height = this.container.clientHeight || 700;

    // 1. Scene
    this.scene = new THREE.Scene();

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, 1.2, 3.2);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.3;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = '0';
    this.renderer.domElement.style.left = '0';
    this.renderer.domElement.style.zIndex = '3';
    this.renderer.domElement.style.pointerEvents = 'auto';

    this.container.appendChild(this.renderer.domElement);

    // 4. Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
    this.controls.maxPolarAngle = Math.PI / 2 + 0.15;
    this.controls.minPolarAngle = Math.PI / 4;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.8;

    // 5. Lighting Setup (Cinematic Horror Mood)
    this.setupLighting();

    // 6. Resize Observer
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(this.container);

    // 7. Render Loop
    this.animate();
  }

  setupLighting() {
    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    // Key Light (Warm golden directional)
    const keyLight = new THREE.DirectionalLight(0xffeedd, 2.2);
    keyLight.position.set(2, 4, 3);
    keyLight.castShadow = true;
    this.scene.add(keyLight);

    // Fill Light (Cool dark blue fill)
    const fillLight = new THREE.DirectionalLight(0x3a506b, 1.2);
    fillLight.position.set(-3, 2, -1);
    this.scene.add(fillLight);

    // Horror Rim Light (Deep crimson red from below/behind)
    const rimLight = new THREE.PointLight(0xcc1100, 3.5, 8);
    rimLight.position.set(0, -0.5, -2);
    this.scene.add(rimLight);

    // Front soft gold spotlight
    const spotLight = new THREE.SpotLight(0x9c7e21, 2.0, 10, Math.PI / 5, 0.4);
    spotLight.position.set(0, 3, 2.5);
    this.scene.add(spotLight);
  }

  loadModel(modelUrl, onProgress = null) {
    if (this.isDisposed) return;

    // Remove previous model
    if (this.currentModel) {
      this.scene.remove(this.currentModel);
      this.disposeHierarchy(this.currentModel);
      this.currentModel = null;
    }
    if (this.mixer) {
      this.mixer.stopAllAction();
      this.mixer = null;
    }

    this.loader.load(
      modelUrl,
      (gltf) => {
        if (this.isDisposed) return;

        const model = gltf.scene;
        this.currentModel = model;

        // Auto-center and fit
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Normalize model height to ~1.85 units (smaller fit)
        const maxAxis = Math.max(size.x, size.y, size.z);
        const targetHeight = 1.85;
        const scale = targetHeight / (size.y || maxAxis || 1);
        model.scale.setScalar(scale);

        // Re-center model
        box.setFromObject(model);
        box.getCenter(center);
        model.position.x = -center.x;
        model.position.y = -box.min.y - 0.92; // Centered gracefully
        model.position.z = -center.z;

        // Traverse materials to ensure lighting & shadow response
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.side = THREE.DoubleSide;
              if (child.material.map) {
                child.material.map.anisotropy = 8;
              }
            }
          }
        });

        this.scene.add(model);

        // Animations if available
        if (gltf.animations && gltf.animations.length > 0) {
          this.mixer = new THREE.AnimationMixer(model);
          const action = this.mixer.clipAction(gltf.animations[0]);
          action.play();
        }

        // Camera positioning
        this.camera.position.set(0, 0.1, 3.6);
        this.controls.target.set(0, 0, 0);
        this.controls.update();

        if (onProgress) onProgress(100);
      },
      (xhr) => {
        if (xhr.total > 0 && onProgress) {
          const percent = (xhr.loaded / xhr.total) * 100;
          onProgress(percent);
        }
      },
      (error) => {
        console.error('Error loading 3D model:', error);
      }
    );
  }

  show() {
    this.isPaused = false;
    if (this.controls) this.controls.enabled = true;
    if (this.renderer && this.renderer.domElement) {
      this.renderer.domElement.style.display = 'block';
      this.renderer.domElement.style.pointerEvents = 'auto';
    }
  }

  hide() {
    this.isPaused = true;
    if (this.controls) this.controls.enabled = false;
    if (this.renderer && this.renderer.domElement) {
      this.renderer.domElement.style.display = 'none';
      this.renderer.domElement.style.pointerEvents = 'none';
    }
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (width === 0 || height === 0) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    if (this.isDisposed) return;
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    if (this.isPaused) return;

    const delta = this.clock.getDelta();

    if (this.mixer) {
      this.mixer.update(delta);
    }

    if (this.controls) {
      this.controls.update();
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  disposeHierarchy(obj) {
    obj.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((mat) => {
            if (mat.map) mat.map.dispose();
            mat.dispose();
          });
        } else {
          if (child.material.map) child.material.map.dispose();
          child.material.dispose();
        }
      }
    });
  }

  destroy() {
    this.isDisposed = true;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.controls) {
      this.controls.dispose();
    }
    if (this.currentModel) {
      this.scene.remove(this.currentModel);
      this.disposeHierarchy(this.currentModel);
      this.currentModel = null;
    }
    if (this.renderer) {
      if (this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
      this.renderer.dispose();
    }
  }
}
