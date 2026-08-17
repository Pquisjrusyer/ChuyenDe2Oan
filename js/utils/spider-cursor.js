/* ============================================
   OAN Horror Game — Spider Web Cursor Effect
   Ported from cursoreffect.jsx to Vanilla JS
   ============================================ */

export function initSpiderCursor() {
  // Avoid duplicate initializations
  if (document.getElementById('spider-cursor-canvas')) return;

  // Create floating overlay canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'spider-cursor-canvas';
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  canvas.style.display = 'block';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);
  const { sin, cos, PI, hypot, min, max } = Math;

  function rnd(x = 1, dx = 0) {
    return Math.random() * x + dx;
  }

  function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.ellipse(x, y, max(0.1, r), max(0.1, r), 0, 0, PI * 2);
    ctx.fill();
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function noise(x, y, t = 101) {
    const w0 = sin(0.3 * x + 1.4 * t + 2.0 + 2.5 * sin(0.4 * y + -1.3 * t + 1.0));
    const w1 = sin(0.2 * y + 1.5 * t + 2.8 + 2.3 * sin(0.5 * x + -1.2 * t + 0.5));
    return w0 + w1;
  }

  function pt(x, y) {
    return { x, y };
  }

  function drawLine(x0, y0, x1, y1) {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    const steps = 40;
    for (let i = 1; i <= steps; i++) {
      const progress = i / steps;
      const x = lerp(x0, x1, progress);
      const y = lerp(y0, y1, progress);
      const k = noise(x / 5 + x0, y / 5 + y0) * 2;
      ctx.lineTo(x + k, y + k);
    }
    ctx.stroke();
  }

  function many(n, f) {
    const arr = [];
    for (let i = 0; i < n; i++) arr.push(f(i));
    return arr;
  }

  function spawn() {
    const pts = many(333, () => ({
      x: rnd(window.innerWidth),
      y: rnd(window.innerHeight),
      len: 0,
      r: 0,
      t: 0
    }));

    const pts2 = many(9, (i) => ({
      x: cos((i / 9) * PI * 2),
      y: sin((i / 9) * PI * 2),
    }));

    const seed = rnd(100);
    let tx = rnd(window.innerWidth);
    let ty = rnd(window.innerHeight);
    let x = rnd(window.innerWidth);
    let y = rnd(window.innerHeight);
    const kx = rnd(0.5, 0.5);
    const ky = rnd(0.5, 0.5);
    const walkRadius = pt(rnd(50, 50), rnd(50, 50));
    const r = window.innerWidth / rnd(100, 150);

    function paintPt(p) {
      pts2.forEach((pt2) => {
        if (!p.len) return;
        drawLine(
          lerp(x + pt2.x * r, p.x, p.len * p.len),
          lerp(y + pt2.y * r, p.y, p.len * p.len),
          x + pt2.x * r,
          y + pt2.y * r
        );
      });
      drawCircle(p.x, p.y, p.r);
    }

    return {
      follow(targetX, targetY) {
        tx = targetX;
        ty = targetY;
      },
      tick(t) {
        const selfMoveX = cos(t * kx + seed) * walkRadius.x;
        const selfMoveY = sin(t * ky + seed) * walkRadius.y;
        const fx = tx + selfMoveX;
        const fy = ty + selfMoveY;

        x += min(window.innerWidth / 100, (fx - x) / 10);
        y += min(window.innerWidth / 100, (fy - y) / 10);

        let i = 0;
        pts.forEach((p) => {
          const dx = p.x - x;
          const dy = p.y - y;
          const len = hypot(dx, dy);
          let radius = min(2, window.innerWidth / len / 5);
          p.t = 0;
          const increasing = len < window.innerWidth / 10 && i++ < 8;
          const dir = increasing ? 0.1 : -0.1;
          if (increasing) {
            radius *= 1.5;
          }
          p.r = radius;
          p.len = max(0, min(p.len + dir, 1));
          paintPt(p);
        });
      }
    };
  }

  const spiders = many(2, spawn);

  const handlePointerMove = (e) => {
    spiders.forEach((spider) => {
      spider.follow(e.clientX, e.clientY);
    });
  };

  const handleResize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };

  window.addEventListener('pointermove', handlePointerMove, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });

  function anim(t) {
    if (w !== window.innerWidth || h !== window.innerHeight) {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(238, 27, 16, 0.20)';
    ctx.strokeStyle = 'rgba(238, 27, 16, 0.20)';
    ctx.lineWidth = 0.8;

    const timeSec = t / 1000;
    spiders.forEach((spider) => spider.tick(timeSec));
    requestAnimationFrame(anim);
  }

  requestAnimationFrame(anim);
}
