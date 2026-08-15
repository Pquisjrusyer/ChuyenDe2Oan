/* ============================================
   OAN Horror Game — Intro & Age Verification Flow
   Matches Figma Nodes:
   - 703:1362 (Desktop - Intro Banner)
   - 708:1346 (Desktop - Xác nhận tuổi)
   - 708:1512 (Desktop - Điền năm sinh)
   - 708:1750 (Desktop - Không phù hợp)
   ============================================ */

export async function renderIntro(container) {
  let currentState = 'prompt'; // 'banner' | 'prompt' | 'birthyear' | 'underage'

  function render() {
    container.innerHTML = `
      <div class="page-intro-figma" data-node-id="703:1362">
        
        <!-- Background Banner (thumbnailintro 1) -->
        <div class="intro-bg-wrapper" data-node-id="706:1495">
          <img src="./assets/05c144f89e828a494931997cf02740c7540f6f7a.png" alt="OAN Intro" class="intro-bg-image" />
        </div>

        <!-- Brand Logo (logo cd2 1) -->
        <div class="intro-logo-box" data-node-id="704:1445">
          <img src="./assets/c734b8f8c6d11e95ee68a838154234358d976d54.svg" alt="OAN" class="intro-logo-svg" />
        </div>

        <!-- Cancel / Close Icon -->
        <button class="intro-cancel-btn" id="intro-cancel-btn" data-node-id="707:1560" title="Đóng">
          <img src="./assets/16a6446e90ff221cf7fbf200555b281763e34d43.svg" alt="✕" />
        </button>

        <!-- Overlay Layers when Modal is active -->
        ${currentState !== 'banner' ? `
          <div class="intro-overlay-screen" data-node-id="708:1403"></div>
          <div class="intro-overlay-dark" data-node-id="708:1404"></div>
        ` : ''}

        <!-- MODAL CONTAINER -->
        ${currentState === 'prompt' ? renderPromptModal() : ''}
        ${currentState === 'birthyear' ? renderBirthYearModal() : ''}
        ${currentState === 'underage' ? renderUnderageModal() : ''}
      </div>
    `;

    attachEvents();
  }

  // 1. Modal: BẠN ĐÃ ĐỦ 18 TUỔI? (708:1346)
  function renderPromptModal() {
    return `
      <div class="intro-modal-center-wrapper" data-node-id="708:1511">
        <div class="figma-age-modal-box animate-fade-in-up" data-node-id="708:1274">
          
          <div class="modal-heading-row" data-node-id="I708:1274;707:1591">
            <h2 class="modal-title-text" data-node-id="I708:1274;707:1592">BẠN ĐÃ ĐỦ 18 TUỔI?</h2>
          </div>

          <div class="modal-desc-box" data-node-id="I708:1274;707:1594">
            <p class="modal-desc-p" data-node-id="I708:1274;707:1595">
              Website này chứa nội dung kinh dị, bạo lực và hình ảnh nhạy cảm dành cho người từ 18 tuổi trở lên.
            </p>
          </div>

          <div class="modal-options-row" data-node-id="I708:1274;708:695">
            
            <!-- Button 1: Tôi đã đủ 18 tuổi (708:633) -->
            <div class="btn-horror-choice" id="btn-over-18" data-node-id="I708:1274;708:633">
              <div class="horror-corners">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="c-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="c-right" />
              </div>
              <div class="choice-field">
                <span class="choice-text">Tôi đã đủ 18 tuổi</span>
              </div>
            </div>

            <!-- Button 2: Tôi chưa đủ 18 tuổi (708:650) -->
            <div class="btn-horror-choice" id="btn-under-18" data-node-id="I708:1274;708:650">
              <div class="horror-corners">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="c-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="c-right" />
              </div>
              <div class="choice-field">
                <span class="choice-text">Tôi chưa đủ 18 tuổi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Modal: ĐIỀN NĂM SINH (708:1512)
  function renderBirthYearModal() {
    return `
      <div class="intro-modal-center-wrapper" data-node-id="708:1567">
        <div class="figma-birthyear-modal-box animate-fade-in-up" data-node-id="708:1618">
          
          <!-- Decorative dread corners -->
          <div class="dread-corner dread-tl"></div>
          <div class="dread-corner dread-tr"></div>
          <div class="dread-corner dread-bl"></div>
          <div class="dread-corner dread-br"></div>

          <div class="modal-heading-row" data-node-id="I708:1618;708:1023">
            <h2 class="modal-title-text" data-node-id="I708:1618;708:1024">Điền năm sinh của bạn</h2>
          </div>

          <div class="birthyear-inputs-container" data-node-id="I708:1618;708:1025">
            
            <!-- Year input field (708:1029) -->
            <div class="year-input-field-wrapper" data-node-id="I708:1618;708:1029">
              <input 
                type="text" 
                inputmode="numeric"
                pattern="[0-9]*"
                maxlength="4"
                id="birth-year-input" 
                class="year-horror-input" 
                placeholder="2xxx" 
                autofocus 
              />
            </div>

            <!-- Confirm Button (708:1111) -->
            <div class="btn-horror-choice btn-confirm-year" id="btn-confirm-year" data-node-id="I708:1618;708:1111">
              <div class="horror-corners">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="c-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="c-right" />
              </div>
              <div class="choice-field">
                <span class="choice-text">Xác nhận</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 3. Modal: KHÔNG PHÙ HỢP / CHƯA ĐỦ TUỔI (708:1750)
  function renderUnderageModal() {
    return `
      <div class="intro-modal-center-wrapper" data-node-id="708:1805">
        <div class="figma-underage-modal-box animate-fade-in-up" data-node-id="708:1846">
          
          <!-- Decorative dread corners -->
          <div class="dread-corner dread-tl"></div>
          <div class="dread-corner dread-tr"></div>
          <div class="dread-corner dread-bl"></div>
          <div class="dread-corner dread-br"></div>

          <div class="modal-heading-row centered-cancel" data-node-id="I708:1846;708:1227">
            <div class="underage-cancel-icon">
              <img src="./assets/16a6446e90ff221cf7fbf200555b281763e34d43.svg" alt="✕" />
            </div>
            <h2 class="modal-title-text" data-node-id="I708:1846;708:1228">
              Xin lỗi, bạn chưa đủ<br/>tuổi để tiếp tục
            </h2>
          </div>

          <div class="modal-desc-box" data-node-id="I708:1846;708:1229">
            <p class="modal-desc-p text-left-justify" data-node-id="I708:1846;708:1269">
              Website này chỉ dành cho người từ <strong style="color:#ffffff;">18 tuổi</strong> trở lên. Nội dung có thể chứa hình ảnh kinh dị và yếu tố tâm lý không phù hợp với trẻ vị thành niên.
            </p>
          </div>

          <!-- Confirm button to go back / retry (708:1232) -->
          <div class="modal-options-row">
            <div class="btn-horror-choice btn-underage-back" id="btn-underage-retry" data-node-id="I708:1846;708:1232">
              <div class="horror-corners">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="c-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="c-right" />
              </div>
              <div class="choice-field">
                <span class="choice-text">Xác nhận</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function attachEvents() {
    // Cancel / Close top right button
    const cancelBtn = container.querySelector('#intro-cancel-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        if (currentState === 'banner') {
          currentState = 'prompt';
        } else {
          currentState = 'banner';
        }
        render();
      });
    }

    // Prompt state buttons
    const btnOver18 = container.querySelector('#btn-over-18');
    const btnUnder18 = container.querySelector('#btn-under-18');

    if (btnOver18) {
      btnOver18.addEventListener('click', () => {
        currentState = 'birthyear';
        render();
      });
    }

    if (btnUnder18) {
      btnUnder18.addEventListener('click', () => {
        currentState = 'underage';
        render();
      });
    }

    // Birthyear state buttons & input
    const confirmYearBtn = container.querySelector('#btn-confirm-year');
    const yearInput = container.querySelector('#birth-year-input');

    const handleConfirmYear = () => {
      const year = parseInt(yearInput ? yearInput.value.trim() : '0', 10);
      const currentYear = new Date().getFullYear();
      if (year > 1900 && (currentYear - year) >= 18) {
        // Valid 18+ user -> Go to Home!
        sessionStorage.setItem('oan_age_verified', 'true');
        window.location.hash = 'home';
      } else {
        // Under 18 or invalid -> Show underage rejection modal
        currentState = 'underage';
        render();
      }
    };

    if (confirmYearBtn) {
      confirmYearBtn.addEventListener('click', handleConfirmYear);
    }
    if (yearInput) {
      yearInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleConfirmYear();
      });
    }

    // Underage state retry button
    const retryBtn = container.querySelector('#btn-underage-retry');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        currentState = 'prompt';
        render();
      });
    }
  }

  render();
}
