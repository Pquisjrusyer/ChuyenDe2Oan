/* ========================================================
   Agentation Visual Feedback Integration (Dev Mode Only)
   ======================================================== */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

export function initAgentation() {
  // Only mount in Vite development mode
  if (import.meta.env.DEV) {
    try {
      let container = document.getElementById('agentation-root');
      if (!container) {
        container = document.createElement('div');
        container.id = 'agentation-root';
        document.body.appendChild(container);
      }

      const root = createRoot(container);
      root.render(React.createElement(Agentation));
      console.log('[Agentation] Visual feedback tool mounted successfully.');
    } catch (err) {
      console.warn('[Agentation] Failed to initialize:', err);
    }
  }
}
