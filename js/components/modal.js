/* ============================================
   OAN Horror Game — Modal Component
   ============================================ */

export function showModal(content, options = {}) {
  const modalRoot = document.getElementById('modal-root');
  const { showClose = true, onClose } = options;

  modalRoot.innerHTML = `
    <div class="modal-backdrop" id="modal-backdrop">
      <div class="modal" style="${options.style || ''}">
        ${showClose ? '<button class="modal__close" id="modal-close-btn">✕</button>' : ''}
        ${content}
      </div>
    </div>
  `;

  // Activate
  requestAnimationFrame(() => {
    document.getElementById('modal-backdrop').classList.add('active');
  });

  // Close handlers
  const closeModal = () => {
    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop) {
      backdrop.classList.remove('active');
      setTimeout(() => {
        modalRoot.innerHTML = '';
        if (onClose) onClose();
      }, 300);
    }
  };

  if (showClose) {
    document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
  }

  // Click outside
  document.getElementById('modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal-backdrop') {
      closeModal();
    }
  });

  return { close: closeModal, element: modalRoot };
}

export function hideModal() {
  const modalRoot = document.getElementById('modal-root');
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
    setTimeout(() => {
      modalRoot.innerHTML = '';
    }, 300);
  }
}
