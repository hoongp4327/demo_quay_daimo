(function () {
  "use strict";

  const DATA = window.SHOTBOOK_DATA;
  const EXTRA_SHOTS = window.EXTRA_SHOTS || [];
  const SPECIAL_SCENES = window.SPECIAL_SCENES || [];
  const SHOOTING_ORDER = window.SHOOTING_ORDER || [];
  const STORAGE_KEY = "daimo_shotbook_done_v1";

  const SPECIAL_SHOTS = [
    { id: "sp-r5-1", stepKey: "r5", campus: "Trường chính (Thư viện)", framing: "Trung rộng (Sigma 24mm • f/3.5)", move: "RS 4 Mini PF trượt ngang chậm quanh bàn 3 cô", desc: "3–4 cô ngồi xem sách GDPT 2018, laptop, giáo án, trao đổi chuyên môn tự nhiên (không cần thu thoại — chạy dưới VO R5)." },
    { id: "sp-r5-2", stepKey: "r5", campus: "Trường chính (Thư viện)", framing: "Cận cảnh (Sigma 45mm • f/2.8)", move: "RS 4 Mini giữ cò Lock đẩy cận tay xếp Flashcard & sổ Passport", desc: "Quay cận bàn tay cô sắp xếp bộ thẻ Flashcard, sổ English Passport mẫu và ghi chú bài giảng." },
    { id: "sp-oic-1", stepKey: "oic_all", campus: "Trường chính (OIC 14:25)", framing: "Trung rộng & Cận (24–35mm • f/2.8–f/3.5)", move: "RS 4 Mini PF lia từ cô sang các cánh tay giơ lên dự đoán", desc: "Step 1 (Predict): Cô giơ bát nước trong suốt, cái thìa và ô tô đồ chơi hỏi đoán vật nào chìm/nổi." },
    { id: "sp-oic-2", stepKey: "oic_all", campus: "Trường chính (OIC 14:35)", framing: "Siêu cận ngang mép bát (50mm • f/2.8 • 50p)", move: "RS 4 Mini xách thấp Briefcase giữ cò Lock đẩy chậm vào bát nước", desc: "Step 2 (Test & Observe): Nhóm 6 bé thả 6 vật vào BÁT NHỰA TRONG SUỐT — thấy rõ chìa khóa/đá chìm, bút chì/thước nổi!" },
    { id: "sp-oic-3", stepKey: "oic_all", campus: "Trường chính (OIC 14:48)", framing: "Trung nhóm báo cáo (28mm) + Toàn lớp (18mm)", move: "RS 4 Mini giữ cò Lock tĩnh nhóm báo cáo → PF lia cả lớp vỗ tay", desc: "Step 3 & 4 (Present & Wrap-up): Nhóm nói chuẩn ('because it is light' / 'heavy and solid', KHÔNG nói 'filled with air') + cả lớp đồng thanh Wrap-up." }
  ];

  function getExtraShot(sceneId) {
    return EXTRA_SHOTS.find((x) => x.sceneId === sceneId) || null;
  }

  const state = {
    activeTab: "storyboard",
    orderMode: "schedule", // 'schedule' (1 -> 20) | 'script' (PC 01 -> 16)
    viewMode: "grid", // 'grid' | 'detail'
    filter: "all",
    search: "",
    checklistFilter: "all",
    activeModalKey: null, // { type: 'step', step: 1..20 } | { type: 'scene', id: 1..16 } | { type: 'special', id: 'r5'|'oic_all' }
    doneShots: loadDoneShots()
  };

  function loadDoneShots() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch {
      return new Set();
    }
  }

  function saveDoneShots() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(state.doneShots)));
    } catch {
      // Ignore storage quota errors
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatRichText(str) {
    return escapeHtml(str).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function getTotalShots() {
    return DATA.scenes.reduce((sum, s) => sum + s.shots.length, 0) + SPECIAL_SHOTS.length;
  }

  function getSceneProgress(scene) {
    const total = scene.shots.length;
    const done = scene.shots.filter((sh) => state.doneShots.has(sh.id)).length;
    return { done, total, isComplete: done === total && total > 0 };
  }

  function getSpecialProgress(specialKey) {
    const shots = SPECIAL_SHOTS.filter((sh) => sh.stepKey === specialKey);
    const total = shots.length;
    const done = shots.filter((sh) => state.doneShots.has(sh.id)).length;
    return { done, total, isComplete: done === total && total > 0 };
  }

  // ==================== TOAST & CLIPBOARD ====================
  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
  }

  async function copyToClipboard(text, btnEl) {
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch {
      copied = false;
    }

    if (!copied) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      }
      document.body.removeChild(ta);
    }

    if (copied) {
      showToast("📋 Đã copy Prompt tạo video AI! Dán vào Veo / Kling / Runway / Sora.");
      if (btnEl) {
        const orig = btnEl.dataset.origText || btnEl.textContent;
        btnEl.dataset.origText = orig;
        btnEl.textContent = "✓ Đã copy!";
        setTimeout(() => {
          btnEl.textContent = orig;
        }, 1600);
      }
    } else {
      showToast("Không thể tự copy — hãy bôi đen đoạn prompt để copy thủ công.");
    }
  }

  // ==================== GIMBAL SVG DIAGRAMS ====================
  function getGimbalSvg(id) {
    const svgs = {
      "push-in": `<svg width="46" height="46" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="12" r="6" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
        <rect x="16" y="34" width="16" height="10" rx="3" fill="#1D4ED8"/>
        <path d="M24 32V21M24 21L19 25.5M24 21L29 25.5" stroke="#1D4ED8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      "pull-out": `<svg width="46" height="46" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="11" r="6" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
        <rect x="16" y="24" width="16" height="10" rx="3" fill="#1D4ED8"/>
        <path d="M24 35V44M24 44L19 39.5M24 44L29 39.5" stroke="#1D4ED8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      "truck": `<svg width="46" height="46" viewBox="0 0 48 48" fill="none">
        <line x1="6" y1="12" x2="42" y2="12" stroke="#94A3B8" stroke-width="3" stroke-linecap="round"/>
        <rect x="10" y="28" width="14" height="10" rx="3" fill="#1D4ED8"/>
        <path d="M26 33H40M40 33L35.5 28.5M40 33L35.5 37.5" stroke="#1D4ED8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 26V16" stroke="#60A5FA" stroke-width="2" stroke-dasharray="3 3"/>
      </svg>`,
      "orbit": `<svg width="46" height="46" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="18" r="6" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
        <path d="M10 31C14 39 34 39 38 30" stroke="#1D4ED8" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M38 30L33 30.5M38 30L37 35" stroke="#1D4ED8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="7" y="25" width="10" height="8" rx="2" fill="#1D4ED8"/>
      </svg>`,
      "tilt-reveal": `<svg width="46" height="46" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="30" width="14" height="10" rx="3" fill="#1D4ED8"/>
        <path d="M24 35L38 14" stroke="#1D4ED8" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M38 14L32.5 15.5M38 14L37.5 19.8" stroke="#1D4ED8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 35H38" stroke="#94A3B8" stroke-width="2" stroke-dasharray="3 3"/>
      </svg>`,
      "static-handheld": `<svg width="46" height="46" viewBox="0 0 48 48" fill="none">
        <rect x="14" y="16" width="20" height="14" rx="4" fill="#1D4ED8"/>
        <circle cx="24" cy="23" r="4" fill="#93C5FD"/>
        <path d="M24 30V41M16 41H32" stroke="#0F172A" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M10 11L15 11M10 11L10 16M38 11L33 11M38 11L38 16" stroke="#10B981" stroke-width="2.2" stroke-linecap="round"/>
      </svg>`
    };
    return svgs[id] || svgs["push-in"];
  }

  // ==================== GLOBAL PROGRESS ====================
  function updateProgressUI() {
    const total = getTotalShots();
    const done = state.doneShots.size;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    document.getElementById("globalProgressText").textContent = `${done} / ${total} cú máy`;
    document.getElementById("globalProgressFill").style.width = `${pct}%`;

    const clDone = document.getElementById("clDoneCount");
    const clTotal = document.getElementById("clTotalCount");
    const clPct = document.getElementById("clPercent");
    const clBar = document.getElementById("clBarFill");
    if (clDone) {
      clDone.textContent = done;
      clTotal.textContent = total;
      clPct.textContent = `${pct}%`;
      clBar.style.width = `${pct}%`;
    }
  }

  function toggleShotDone(shotId) {
    if (state.doneShots.has(shotId)) {
      state.doneShots.delete(shotId);
    } else {
      state.doneShots.add(shotId);
    }
    saveDoneShots();
    updateProgressUI();
    renderScenes();
    renderChecklist();
    if (state.activeModalKey !== null) {
      renderModalContent(state.activeModalKey);
    }
  }

  // ==================== FILTERING ====================
  function getFilteredScenes() {
    const q = state.search.trim().toLowerCase();
    return DATA.scenes.filter((scene) => {
      if (state.filter === "highlight" && !scene.isHighlight) return false;
      if (state.filter === "outdoor" && scene.environment !== "outdoor") return false;
      if (state.filter === "indoor" && !scene.needsLight) return false;
      if (state.filter === "slowmo" && !scene.needsSlowMo) return false;
      if (state.filter === "remaining" && getSceneProgress(scene).isComplete) return false;
      if (state.filter === "main" || state.filter === "branch") {
        const matchesCampus = SHOOTING_ORDER.some((st) => st.sceneId === scene.id && st.campusKey === state.filter);
        if (!matchesCampus) return false;
      }

      if (q) {
        const haystack = [
          scene.code,
          scene.title,
          scene.vnTitle,
          scene.location,
          scene.gimbalMode,
          scene.connectionType,
          scene.connectionTip,
          scene.beginnerTip,
          scene.lightStatus,
          scene.zve10Config,
          ...scene.shots.map((s) => `${s.campus} ${s.framing} ${s.move} ${s.desc}`),
          ...scene.dialogue.map((d) => `${d.speaker} ${d.text}`),
          ...scene.aiPrompts.map((p) => `${p.label} ${p.motionVi} ${p.prompt}`)
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }

  function getFilteredScheduleSteps() {
    const q = state.search.trim().toLowerCase();
    return SHOOTING_ORDER.filter((stepObj) => {
      if (state.filter === "main" && stepObj.campusKey !== "main") return false;
      if (state.filter === "branch" && stepObj.campusKey !== "branch") return false;

      if (stepObj.kind === "scene") {
        const scene = DATA.scenes.find((s) => s.id === stepObj.sceneId);
        if (!scene) return false;
        if (state.filter === "highlight" && !scene.isHighlight) return false;
        if (state.filter === "outdoor" && scene.environment !== "outdoor") return false;
        if (state.filter === "indoor" && !scene.needsLight) return false;
        if (state.filter === "remaining" && getSceneProgress(scene).isComplete) return false;
        if (q) {
          const hay = [
            `bước ${stepObj.step}`,
            stepObj.time,
            stepObj.teacher,
            stepObj.campus,
            stepObj.labelOverride,
            stepObj.quickNote,
            scene.code,
            scene.title,
            scene.vnTitle,
            scene.location,
            scene.gimbalMode,
            scene.lightStatus,
            scene.beginnerTip,
            ...scene.dialogue.map((d) => d.text)
          ].join(" ").toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      } else {
        const isOic = stepObj.kind === "oic";
        if (state.filter === "highlight" && !isOic) return false;
        if (state.filter === "outdoor") return false;
        if (state.filter === "remaining" && getSpecialProgress(stepObj.specialId).isComplete) return false;
        if (q) {
          const hay = [
            `bước ${stepObj.step}`,
            stepObj.time,
            stepObj.teacher,
            stepObj.campus,
            stepObj.labelOverride,
            stepObj.quickNote,
            isOic ? "oic sink float thí nghiệm bát trong suốt" : "r5 tổ chuyên môn thư viện giáo án"
          ].join(" ").toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      }
    });
  }

  function buildScheduleRibbonHtml(stepObj) {
    const ribbonCls = stepObj.kind === "oic" ? " ribbon-oic" : (stepObj.campusKey === "branch" ? " ribbon-branch" : "");
    return `
      <div class="step-ribbon${ribbonCls}">
        <span class="step-ribbon-left">
          <span class="step-num-badge">BƯỚC ${String(stepObj.step).padStart(2, "0")}</span>
          <span>⏰ ${escapeHtml(stepObj.time)}</span>
        </span>
        <span class="step-teacher-pill">👩‍🏫 ${escapeHtml(stepObj.teacher)}</span>
      </div>
    `;
  }

  function buildScheduleStepCardHtml(stepObj) {
    if (stepObj.kind === "scene") {
      const scene = DATA.scenes.find((s) => s.id === stepObj.sceneId);
      if (!scene) return "";
      const prog = getSceneProgress(scene);
      const lightClass = scene.needsLight ? "light-on" : "light-off";
      const firstPrompt = scene.aiPrompts[0];

      return `
        <article class="scene-card ${scene.isHighlight ? "is-highlight" : ""} ${prog.isComplete ? "is-completed" : ""}" data-scene-id="${scene.id}">
          ${buildScheduleRibbonHtml(stepObj)}
          <div class="scene-thumb-wrap" data-open-step="${stepObj.step}" title="Bấm xem chi tiết cách quay & Prompt">
            <img src="${scene.image}" alt="Ảnh demo ${escapeHtml(scene.title)}" class="scene-thumb" loading="lazy" />
            <div class="thumb-top-badges">
              <span class="scene-code-pill">${escapeHtml(scene.code)} • 🏫 ${escapeHtml(stepObj.campus)}</span>
              ${scene.isHighlight ? `<span class="scene-star-pill">⭐ Điểm nhấn</span>` : ""}
            </div>
            <div class="thumb-bottom-bar">
              <span class="thumb-loc">📍 ${escapeHtml(scene.location)}</span>
              <span class="thumb-cta">🔍 Xem chi tiết</span>
            </div>
          </div>

          <div class="scene-card-body">
            <div class="scene-title-block" data-open-step="${stepObj.step}">
              <h3>${escapeHtml(stepObj.labelOverride || scene.title)}</h3>
              <p class="scene-vn-title">${escapeHtml(scene.vnTitle)} • ⏱ ${escapeHtml(scene.duration)}</p>
            </div>

            <div class="scene-meta-grid">
              <div class="meta-chip">
                <span class="meta-chip-label">🕹️ DJI RS 4 Mini</span>
                ${escapeHtml(scene.gimbalMode)}
              </div>
              <div class="meta-chip ${lightClass}">
                <span class="meta-chip-label">${scene.needsLight ? "💡 Đèn LED nhỏ" : "☀️ Ánh sáng"}</span>
                ${escapeHtml(scene.lightStatus)}
              </div>
            </div>

            <div class="scene-card-tip">
              <div class="scene-card-tip-inner"><strong>🎯 Lưu ý bước này:</strong> ${escapeHtml(stepObj.quickNote)}</div>
            </div>

            <div class="scene-card-footer">
              <span class="card-shot-progress ${prog.isComplete ? "all-done" : ""}">
                ${prog.isComplete ? "✅ Đủ cảnh" : `🎬 ${prog.done}/${prog.total} cú máy`}
              </span>
              <div class="card-btn-group">
                ${firstPrompt ? `<button type="button" class="btn btn-outline btn-sm" data-copy-prompt="${scene.id}-0">📋 Prompt</button>` : ""}
                <button type="button" class="btn btn-primary btn-sm" data-open-step="${stepObj.step}">Cách quay →</button>
              </div>
            </div>
          </div>
        </article>
      `;
    }

    // Special step (R5 or OIC)
    const isOic = stepObj.kind === "oic";
    const sp = isOic
      ? SPECIAL_SCENES.find((x) => x.id === "oic2") || SPECIAL_SCENES[1]
      : SPECIAL_SCENES.find((x) => x.id === "r5") || SPECIAL_SCENES[0];
    const prog = getSpecialProgress(stepObj.specialId);

    return `
      <article class="scene-card is-highlight ${prog.isComplete ? "is-completed" : ""}">
        ${buildScheduleRibbonHtml(stepObj)}
        <div class="scene-thumb-wrap" data-open-step="${stepObj.step}" title="Bấm xem chi tiết cách quay">
          <img src="${sp.image}" alt="${escapeHtml(stepObj.labelOverride)}" class="scene-thumb" loading="lazy" />
          <div class="thumb-top-badges">
            <span class="scene-code-pill">${isOic ? "KHÚC 3 • LỚP OIC" : "KHÚC 1 • CẢNH R5"} • 🏫 ${escapeHtml(stepObj.campus)}</span>
            <span class="scene-star-pill">${isOic ? "⭐ BẮT BUỘC CHIỀU" : "📌 MỚI (EXCEL)"}</span>
          </div>
          <div class="thumb-bottom-bar">
            <span class="thumb-loc">📍 ${isOic ? "Phòng học Lớp OIC (Trường chính)" : "Thư viện Trường chính (gộp sau PC 08)"}</span>
            <span class="thumb-cta">🔍 Xem chi tiết</span>
          </div>
        </div>
        <div class="scene-card-body">
          <div class="scene-title-block" data-open-step="${stepObj.step}">
            <h3>${escapeHtml(stepObj.labelOverride)}</h3>
            <p class="scene-vn-title">${isOic ? "Step 1 Predict → Step 2 Test bát trong suốt → Step 3 & 4 Present & Wrap-up" : "3–4 cô soạn bài, xem sách GDPT 2018, laptop & bộ học liệu (dưới VO R5)"}</p>
          </div>
          <div class="scene-meta-grid">
            <div class="meta-chip">
              <span class="meta-chip-label">⚙️ Sigma 18-50mm</span>
              ${escapeHtml(sp.cameraSpec)}
            </div>
            <div class="meta-chip light-on">
              <span class="meta-chip-label">💡 Đèn LED nhỏ</span>
              ${escapeHtml(sp.lightSpec)}
            </div>
          </div>
          <div class="scene-card-tip">
            <div class="scene-card-tip-inner"><strong>🎯 Lưu ý bước này:</strong> ${escapeHtml(stepObj.quickNote)}</div>
          </div>
          <div class="scene-card-footer">
            <span class="card-shot-progress ${prog.isComplete ? "all-done" : ""}">
              ${prog.isComplete ? "✅ Đủ cảnh" : `🎬 ${prog.done}/${prog.total} cú máy`}
            </span>
            <div class="card-btn-group">
              <button type="button" class="btn btn-primary btn-sm" data-open-step="${stepObj.step}">Cách quay →</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function buildSpecialDetailHtml(specialKey, stepObj) {
    const isOic = specialKey === "oic_all";
    const items = isOic ? SPECIAL_SCENES.filter((x) => x.id.startsWith("oic")) : SPECIAL_SCENES.filter((x) => x.id === "r5");
    const shots = SPECIAL_SHOTS.filter((sh) => sh.stepKey === specialKey);
    const bannerHtml = stepObj
      ? `<div class="detail-step-banner ${isOic ? "ribbon-oic" : ""}"><span>🗓️ BƯỚC ${String(stepObj.step).padStart(2, "0")} • ⏰ ${escapeHtml(stepObj.time)} • 🏫 ${escapeHtml(stepObj.campus)}</span><span>👩‍🏫 ${escapeHtml(stepObj.teacher)}</span></div>`
      : "";

    const shotsHtml = shots.map((shot, idx) => {
      const isDone = state.doneShots.has(shot.id);
      return `
        <label class="shot-item ${isDone ? "done" : ""}">
          <input type="checkbox" class="shot-checkbox" data-toggle-shot="${shot.id}" ${isDone ? "checked" : ""} />
          <div class="shot-content">
            <div class="shot-top">
              <span class="badge badge-blue">Cú ${idx + 1}</span>
              <span class="badge badge-green">🏫 ${escapeHtml(shot.campus)}</span>
              <span class="badge badge-slate">🎥 ${escapeHtml(shot.framing)}</span>
              <span class="badge badge-violet">🕹️ ${escapeHtml(shot.move)}</span>
            </div>
            <p class="shot-desc">${escapeHtml(shot.desc)}</p>
          </div>
        </label>
      `;
    }).join("");

    const cardsHtml = items.map((sp) => `
      <div class="detail-grid" style="border-top: 1px solid #e2e8f0;">
        <div>
          <div class="viewfinder-box">
            <img src="${sp.image}" alt="${escapeHtml(sp.title)}" class="viewfinder-img" />
            <div class="vf-motion-badge">🕹️ ${escapeHtml(sp.gimbalSpec)}</div>
          </div>
        </div>
        <div>
          <div style="margin-bottom:8px;">
            <span class="badge ${sp.badgeColor}">${escapeHtml(sp.code)}</span>
            <span class="badge badge-amber">⏰ ${escapeHtml(sp.schedule)}</span>
          </div>
          <h4 style="margin:0 0 6px; font-size:1rem;">${escapeHtml(sp.title)}</h4>
          <p style="margin:0 0 10px; font-size:0.86rem; color:#475569;">${escapeHtml(sp.purpose)}</p>
          <div class="tech-stack" style="margin-top:0;">
            <div class="tech-row"><strong>⚙️ Sigma 18-50mm f/2.8</strong>${escapeHtml(sp.cameraSpec)}</div>
            <div class="tech-row"><strong>💡 Đèn LED &amp; Thu âm</strong>${escapeHtml(sp.lightSpec)}</div>
            <div class="tech-row tip-connect"><strong>🗣️ Lời bình / Thoại EN</strong>${escapeHtml(sp.voText)}</div>
          </div>
        </div>
      </div>
    `).join("");

    return `
      <article class="detail-card is-highlight">
        ${bannerHtml}
        <div class="detail-header">
          <div class="detail-title-wrap">
            <h3>${isOic ? "🧪 LỚP OIC: Thí nghiệm Sink & Float (3 bước bắt buộc 14:25 – 15:00)" : "📚 CẢNH R5 (MỚI): Tổ chuyên môn soạn bài & học liệu"}</h3>
            <p>${isOic ? "Quay tại Phòng học OIC (Trường chính) • Dùng BÁT NHỰA TRONG SUỐT & không nói 'filled with air' cho bút chì/thước nhựa" : "Gộp quay ngay tại Thư viện Trường chính (10:25 – 10:45) cùng Cô Cúc, Cô Trang, Cô Ngân — chạy dưới VO R5, không cần thu thoại"}</p>
          </div>
        </div>
        <div style="padding: 16px 22px;">
          <h4 class="detail-section-title">🎬 Checklist cú máy (Tích đánh dấu đã quay)</h4>
          <div class="shot-list">${shotsHtml}</div>
        </div>
        ${cardsHtml}
      </article>
    `;
  }

  // ==================== SCENE CARD (GRID MODE) ====================
  function buildGridCardHtml(scene) {
    const prog = getSceneProgress(scene);
    const lightClass = scene.needsLight ? "light-on" : "light-off";
    const firstPrompt = scene.aiPrompts[0];

    return `
      <article class="scene-card ${scene.isHighlight ? "is-highlight" : ""} ${prog.isComplete ? "is-completed" : ""}" data-scene-id="${scene.id}">
        <div class="scene-thumb-wrap" data-open-modal="${scene.id}" title="Bấm xem chi tiết cách quay & Prompt">
          <img src="${scene.image}" alt="Ảnh demo ${escapeHtml(scene.title)}" class="scene-thumb" loading="lazy" />
          <div class="thumb-top-badges">
            <span class="scene-code-pill">${escapeHtml(scene.code)} • ⏱ ${escapeHtml(scene.duration)}</span>
            ${scene.isHighlight ? `<span class="scene-star-pill">⭐ Điểm nhấn</span>` : ""}
          </div>
          <div class="thumb-bottom-bar">
            <span class="thumb-loc">📍 ${escapeHtml(scene.location)}</span>
            <span class="thumb-cta">🔍 Xem chi tiết</span>
          </div>
        </div>

        <div class="scene-card-body">
          <div class="scene-title-block" data-open-modal="${scene.id}" title="Bấm xem chi tiết cảnh quay">
            <h3>${escapeHtml(scene.title)}</h3>
            <p class="scene-vn-title">${escapeHtml(scene.vnTitle)}</p>
          </div>

          <div class="scene-meta-grid">
            <div class="meta-chip">
              <span class="meta-chip-label">🕹️ DJI RS 4 Mini</span>
              ${escapeHtml(scene.gimbalMode)}
            </div>
            <div class="meta-chip ${lightClass}">
              <span class="meta-chip-label">${scene.needsLight ? "💡 Đèn LED nhỏ" : "☀️ Ánh sáng"}</span>
              ${escapeHtml(scene.lightStatus)}
            </div>
          </div>

          <div class="scene-card-tip">
            <div class="scene-card-tip-inner"><strong>💡 Mẹo nhanh:</strong> ${formatRichText(scene.beginnerTip)}</div>
          </div>

          <div class="scene-card-footer">
            <span class="card-shot-progress ${prog.isComplete ? "all-done" : ""}">
              ${prog.isComplete ? "✅ Đủ cảnh" : `🎬 ${prog.done}/${prog.total} cú máy`}
            </span>
            <div class="card-btn-group">
              ${
                firstPrompt
                  ? `<button type="button" class="btn btn-outline btn-sm" data-copy-prompt="${scene.id}-0" title="Copy prompt tạo video AI cho cú máy chính">📋 Prompt AI</button>`
                  : ""
              }
              <button type="button" class="btn btn-primary btn-sm" data-open-modal="${scene.id}">
                Cách quay →
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  // ==================== FULL DETAIL SHEET (USED IN BOTH STREAM & MODAL) ====================
  function buildDetailSheetHtml(scene, contextKey) {
    const prog = getSceneProgress(scene);
    const vfId = `vf-${contextKey}-${scene.id}`;
    const recMode = scene.needsSlowMo ? "4K 25p / 1080 50p" : "4K 25p • 1/50s";

    const shotsHtml = scene.shots
      .map((shot, idx) => {
        const isDone = state.doneShots.has(shot.id);
        return `
          <label class="shot-item ${isDone ? "done" : ""}">
            <input type="checkbox" class="shot-checkbox" data-toggle-shot="${shot.id}" ${isDone ? "checked" : ""} />
            <div class="shot-content">
              <div class="shot-top">
                <span class="badge badge-blue">Cú ${idx + 1}</span>
                <span class="badge badge-green">🏫 ${escapeHtml(shot.campus)}</span>
                <span class="badge badge-slate">🎥 ${escapeHtml(shot.framing)}</span>
                <span class="badge badge-violet">🕹️ ${escapeHtml(shot.move)}</span>
              </div>
              <p class="shot-desc">${escapeHtml(shot.desc)}</p>
            </div>
          </label>
        `;
      })
      .join("");

    const dialogueHtml = scene.dialogue
      .map((line) => {
        if (line.isCaption) {
          return `<div class="dialogue-caption">📺 ${escapeHtml(line.speaker)}: ${escapeHtml(line.text)}</div>`;
        }
        return `<div class="dialogue-line"><span class="dialogue-speaker">${escapeHtml(line.speaker)}:</span>${escapeHtml(line.text)}</div>`;
      })
      .join("");

    const extra = getExtraShot(scene.id);
    const extraPromptCard = extra
      ? `
        <div class="prompt-card" style="background:#ecfdf5; border-color:#a7f3d0;">
          <div class="prompt-head">
            <span class="prompt-label" style="color:#047857;">➕ Cảnh bổ sung: ${escapeHtml(extra.title)}</span>
            <button type="button" class="btn btn-primary btn-sm" style="background:#059669;" data-copy-extra="${extra.sceneId}">
              📋 Copy Prompt bổ sung
            </button>
          </div>
          <div class="prompt-motion-vi" style="color:#065f46;">
            <strong>Bổ sung phần còn thiếu:</strong> ${escapeHtml(extra.fillsGap)}<br/>
            <strong>Hình dung chuyển động:</strong> ${escapeHtml(extra.motionVi)}
          </div>
          <pre class="prompt-code" style="border-color:#a7f3d0;">${escapeHtml(extra.prompt)}</pre>
        </div>
      `
      : "";

    const promptsHtml =
      scene.aiPrompts
        .map(
          (p, idx) => `
        <div class="prompt-card">
          <div class="prompt-head">
            <span class="prompt-label">✨ ${escapeHtml(p.label)}</span>
            <button type="button" class="btn btn-violet btn-sm" data-copy-prompt="${scene.id}-${idx}">
              📋 Copy Prompt (16:9)
            </button>
          </div>
          <div class="prompt-motion-vi">
            <strong>Hình dung chuyển động máy:</strong> ${escapeHtml(p.motionVi)}
          </div>
          <pre class="prompt-code">${escapeHtml(p.prompt)}</pre>
        </div>
      `
        )
        .join("") + extraPromptCard;

    return `
      <article class="detail-card ${scene.isHighlight ? "is-highlight" : ""}">
        <div class="detail-header">
          <div class="detail-title-wrap">
            <div class="detail-badges">
              <span class="badge badge-blue">${escapeHtml(scene.code)} • ⏱ ${escapeHtml(scene.duration)}</span>
              ${scene.isHighlight ? `<span class="badge badge-amber">⭐ Điểm nhấn cần đầu tư</span>` : ""}
              <span class="badge ${scene.needsLight ? "badge-amber" : "badge-green"}">
                ${scene.needsLight ? "💡 Bật đèn LED nhỏ" : "☀️ Ánh sáng tự nhiên"}
              </span>
              <span class="badge badge-slate">🔗 ${escapeHtml(scene.connectionType)}</span>
            </div>
            <h3>${escapeHtml(scene.title)}</h3>
            <p>${escapeHtml(scene.vnTitle)} — 📍 ${escapeHtml(scene.location)}</p>
          </div>
          <span class="badge ${prog.isComplete ? "badge-green" : "badge-slate"}">
            ${prog.isComplete ? "✅ Đã quay đủ" : `Tiến độ: ${prog.done}/${prog.total} cú máy`}
          </span>
        </div>

        <div class="detail-grid">
          <!-- Left Column: Interactive Viewfinder Demo Image & Tech Specs -->
          <div>
            <div class="viewfinder-box" id="${vfId}">
              <img src="${scene.image}" alt="Ảnh demo ${escapeHtml(scene.title)}" class="viewfinder-img" />
              <div class="vf-grid-overlay">
                <div class="vf-hud-top">
                  <span class="vf-rec"><span class="vf-rec-dot"></span> REC • ZV-E10</span>
                  <span>${escapeHtml(recMode)} • AF-C Eye</span>
                </div>
                <div class="vf-hud-bottom">Vùng chừa phụ đề song ngữ Anh – Việt (không để mặt bé sát đáy!)</div>
              </div>
              <div class="vf-split-overlay">
                <div class="vf-split-mask"></div>
                <div class="vf-split-center">
                  <span>Vùng an toàn ghép Split Screen 50/50</span>
                </div>
                <div class="vf-split-mask"></div>
              </div>
              <div class="vf-motion-badge">
                🕹️ ${escapeHtml(scene.gimbalMode)}
              </div>
            </div>

            <div class="vf-controls">
              <button type="button" class="vf-toggle-btn" data-vf-toggle="show-grid" data-vf-target="${vfId}">
                ⊞ Bật lưới 3x3 &amp; Vùng phụ đề
              </button>
              <button type="button" class="vf-toggle-btn" data-vf-toggle="show-split" data-vf-target="${vfId}">
                ◫ Xem khung Split Screen 50/50
              </button>
              ${
                extra
                  ? `<button type="button" class="vf-toggle-btn" data-vf-swap="${vfId}" data-img-a="${scene.image}" data-img-b="${extra.image}" data-label-a="Ảnh 1: Góc quay chính" data-label-b="Ảnh 2: Cảnh bổ sung">
                      🔄 Đổi sang Ảnh bổ sung (2/2)
                    </button>`
                  : ""
              }
            </div>

            <div class="tech-stack">
              <div class="tech-row">
                <strong>⚙️ Cài đặt ZV-E10 + Sigma 18-50mm f/2.8</strong>
                ${escapeHtml(scene.zve10Config)}
              </div>
              <div class="tech-row">
                <strong>💡 Đèn LED nhỏ &amp; Ánh sáng</strong>
                ${escapeHtml(scene.lightStatus)}
              </div>
              <div class="tech-row tip-beginner">
                <strong>🎯 Mẹo quay combo ZV-E10 + Sigma + RS 4 Mini</strong>
                ${formatRichText(scene.beginnerTip)}
              </div>
              <div class="tech-row tip-connect">
                <strong>🔗 Cách nối Điểm chính ↔ Phân hiệu</strong>
                ${formatRichText(scene.connectionTip)}
              </div>
            </div>
          </div>

          <!-- Right Column: Shotlist, Dialogue, AI Video Prompts -->
          <div>
            <div class="detail-section">
              <h4 class="detail-section-title">🎬 Danh sách cú máy cần quay (Tích để đánh dấu đã quay)</h4>
              <div class="shot-list">${shotsHtml}</div>
            </div>

            <div class="detail-section">
              <details class="dialogue-details" open>
                <summary class="dialogue-summary">🗣️ Lời thoại kịch bản &amp; Chữ hiển thị (${scene.dialogue.length} dòng)</summary>
                <div class="dialogue-list">${dialogueHtml}</div>
              </details>
            </div>

            <div class="detail-section">
              <h4 class="detail-section-title">🤖 Prompt tạo video AI mô phỏng chuyển động (Veo / Kling / Runway / Sora)</h4>
              ${promptsHtml}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  // ==================== RENDER R5 & OIC SPECIAL SCENES ====================
  function renderSpecialScenes() {
    const container = document.getElementById("specialScenesContainer");
    if (!container) return;

    container.innerHTML = SPECIAL_SCENES.map((sp) => {
      const vfId = `vf-sp-${sp.id}`;
      return `
        <article class="detail-card is-highlight">
          <div class="detail-header">
            <div class="detail-title-wrap">
              <div class="detail-badges">
                <span class="badge ${sp.badgeColor}">${escapeHtml(sp.code)}</span>
                <span class="badge badge-amber">📅 ${escapeHtml(sp.schedule)}</span>
              </div>
              <h3>${escapeHtml(sp.title)}</h3>
              <p>${escapeHtml(sp.purpose)}</p>
            </div>
          </div>
          <div class="detail-grid">
            <div>
              <div class="viewfinder-box" id="${vfId}">
                <img src="${sp.image}" alt="Ảnh demo ${escapeHtml(sp.title)}" class="viewfinder-img" loading="lazy" />
                <div class="vf-grid-overlay">
                  <div class="vf-hud-top">
                    <span class="vf-rec"><span class="vf-rec-dot"></span> REC • ZV-E10</span>
                    <span>Sigma 18-50 f/2.8</span>
                  </div>
                  <div class="vf-hud-bottom">Vùng chừa phụ đề song ngữ Anh – Việt</div>
                </div>
                <div class="vf-motion-badge">🕹️ ${escapeHtml(sp.gimbalSpec)}</div>
              </div>
              <div class="vf-controls">
                <button type="button" class="vf-toggle-btn" data-vf-toggle="show-grid" data-vf-target="${vfId}">
                  ⊞ Bật lưới 3x3 &amp; Vùng phụ đề
                </button>
              </div>
            </div>
            <div>
              <div class="tech-stack" style="margin-top: 0;">
                <div class="tech-row">
                  <strong>⚙️ Tiêu cự &amp; Khẩu độ Sigma 18-50mm f/2.8</strong>
                  ${escapeHtml(sp.cameraSpec)}
                </div>
                <div class="tech-row">
                  <strong>🕹️ Thao tác DJI RS 4 Mini</strong>
                  ${escapeHtml(sp.gimbalSpec)}
                </div>
                <div class="tech-row">
                  <strong>💡 Đèn LED nhỏ &amp; Âm thanh</strong>
                  ${escapeHtml(sp.lightSpec)}
                </div>
                <div class="tech-row tip-connect">
                  <strong>🗣️ Lời bình VO / Thoại tiếng Anh chuẩn</strong>
                  ${escapeHtml(sp.voText)}
                </div>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  // ==================== RENDER EXTRA (MISSING) SHOTS TAB ====================
  function renderExtraShots() {
    const container = document.getElementById("extraShotsContainer");
    if (!container) return;

    container.innerHTML = EXTRA_SHOTS.map((ex) => {
      const vfId = `vf-extra-${ex.sceneId}`;
      return `
        <article class="detail-card ${ex.code.includes("⭐") ? "is-highlight" : ""}">
          <div class="detail-header">
            <div class="detail-title-wrap">
              <div class="detail-badges">
                <span class="badge badge-green">${escapeHtml(ex.code)}</span>
                <span class="badge badge-blue">File: images-bo-sung/scene-${String(ex.sceneId).padStart(2, "0")}-b.jpg</span>
              </div>
              <h3>${escapeHtml(ex.title)}</h3>
              <p>${escapeHtml(ex.fillsGap)}</p>
            </div>
            <button type="button" class="btn btn-outline btn-sm" data-open-modal="${ex.sceneId}">
              Xem lại Phân cảnh ${String(ex.sceneId).padStart(2, "0")} →
            </button>
          </div>
          <div class="detail-grid">
            <div>
              <div class="viewfinder-box" id="${vfId}">
                <img src="${ex.image}" alt="Ảnh bổ sung ${escapeHtml(ex.title)}" class="viewfinder-img" loading="lazy" />
                <div class="vf-grid-overlay">
                  <div class="vf-hud-top">
                    <span class="vf-rec"><span class="vf-rec-dot"></span> REC • ZV-E10</span>
                    <span>Sigma 18-50 f/2.8</span>
                  </div>
                  <div class="vf-hud-bottom">Vùng chừa phụ đề song ngữ Anh – Việt</div>
                </div>
                <div class="vf-split-overlay">
                  <div class="vf-split-mask"></div>
                  <div class="vf-split-center"><span>Vùng an toàn ghép Split Screen 50/50</span></div>
                  <div class="vf-split-mask"></div>
                </div>
                <div class="vf-motion-badge">🕹️ ${escapeHtml(ex.gimbalSpec)}</div>
              </div>
              <div class="vf-controls">
                <button type="button" class="vf-toggle-btn" data-vf-toggle="show-grid" data-vf-target="${vfId}">
                  ⊞ Bật lưới 3x3 &amp; Vùng phụ đề
                </button>
                <button type="button" class="vf-toggle-btn" data-vf-toggle="show-split" data-vf-target="${vfId}">
                  ◫ Xem khung Split Screen 50/50
                </button>
              </div>
            </div>
            <div>
              <div class="tech-stack" style="margin-top: 0; margin-bottom: 14px;">
                <div class="tech-row">
                  <strong>⚙️ Tiêu cự &amp; Khẩu độ Sigma 18-50mm f/2.8</strong>
                  ${escapeHtml(ex.cameraSpec)}
                </div>
                <div class="tech-row">
                  <strong>🕹️ Thao tác DJI RS 4 Mini</strong>
                  ${escapeHtml(ex.gimbalSpec)}
                </div>
                <div class="tech-row">
                  <strong>💡 Đèn LED nhỏ &amp; Ánh sáng</strong>
                  ${escapeHtml(ex.lightSpec)}
                </div>
              </div>
              <div class="prompt-card">
                <div class="prompt-head">
                  <span class="prompt-label">🤖 Prompt Google Flow (Veo 3.1 Fast • 16:9 • Khung hình)</span>
                  <button type="button" class="btn btn-violet btn-sm" data-copy-extra="${ex.sceneId}">
                    📋 Copy Prompt (16:9)
                  </button>
                </div>
                <div class="prompt-motion-vi">
                  <strong>Hình dung chuyển động máy:</strong> ${escapeHtml(ex.motionVi)}
                </div>
                <pre class="prompt-code">${escapeHtml(ex.prompt)}</pre>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  // ==================== RENDER SCENES ====================
  function renderScenes() {
    const container = document.getElementById("scenesContainer");
    container.className = state.viewMode === "grid" ? "scenes-grid" : "scenes-stream";

    if (state.orderMode === "schedule") {
      const steps = getFilteredScheduleSteps();
      if (steps.length === 0) {
        container.innerHTML = `
          <div class="empty-state" style="grid-column: 1 / -1">
            <p style="font-size: 1rem; font-weight: 700; margin-bottom: 6px;">Không tìm thấy bước quay phù hợp</p>
            <p style="margin: 0;">Thử xóa từ khóa tìm kiếm hoặc chọn bộ lọc "Tất cả (20 bước)".</p>
          </div>
        `;
        return;
      }

      const phaseMeta = {};
      SHOOTING_ORDER.forEach((st) => {
        if (st.phaseTitle) phaseMeta[st.phaseId] = st;
      });

      const htmlParts = [];
      let lastPhase = null;
      steps.forEach((st) => {
        if (st.phaseId !== lastPhase) {
          lastPhase = st.phaseId;
          const meta = phaseMeta[st.phaseId];
          if (meta) {
            htmlParts.push(`
              <div class="phase-banner ${meta.phaseColor || ""}">
                <div>
                  <h3 class="phase-banner-title">${escapeHtml(meta.phaseTitle)}</h3>
                  <p class="phase-banner-sub">${escapeHtml(meta.phaseSub || "")}</p>
                </div>
              </div>
            `);
          }
        }

        if (state.viewMode === "grid") {
          htmlParts.push(buildScheduleStepCardHtml(st));
        } else {
          if (st.kind === "scene") {
            const scene = DATA.scenes.find((s) => s.id === st.sceneId);
            if (scene) {
              const bannerCls = st.campusKey === "branch" ? " ribbon-branch" : "";
              const stepTop = `<div class="detail-step-banner${bannerCls}"><span>🗓️ BƯỚC ${String(st.step).padStart(2, "0")} • ⏰ ${escapeHtml(st.time)} • 🏫 ${escapeHtml(st.campus)}</span><span>👩‍🏫 ${escapeHtml(st.teacher)}</span></div>`;
              htmlParts.push(
                buildDetailSheetHtml(scene, `sched-${st.step}`).replace(
                  /(<article class="detail-card[^>]*>)/,
                  `$1${stepTop}`
                )
              );
            }
          } else {
            htmlParts.push(buildSpecialDetailHtml(st.specialId, st));
          }
        }
      });

      container.innerHTML = htmlParts.join("");
      return;
    }

    // Script editing order (PC 01 -> 16)
    const filtered = getFilteredScenes();
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1">
          <p style="font-size: 1rem; font-weight: 700; margin-bottom: 6px;">Không tìm thấy phân cảnh phù hợp</p>
          <p style="margin: 0;">Thử xóa từ khóa tìm kiếm hoặc chọn bộ lọc "Tất cả".</p>
        </div>
      `;
      return;
    }

    if (state.viewMode === "grid") {
      container.innerHTML = filtered.map(buildGridCardHtml).join("");
    } else {
      container.innerHTML = filtered.map((s) => buildDetailSheetHtml(s, "stream")).join("");
    }
  }

  // ==================== RENDER GEAR GUIDE TAB ====================
  function renderGearGuide() {
    const { beginnerGoldenRules, zve10Settings, gimbalMoves, lightRules } = DATA.gearGuide;

    document.getElementById("goldenRulesList").innerHTML = beginnerGoldenRules
      .map((rule) => `<li>${escapeHtml(rule)}</li>`)
      .join("");

    document.getElementById("zve10SettingsGrid").innerHTML = zve10Settings
      .map(
        (item) => `
        <div class="setting-item">
          <div class="setting-cat">${escapeHtml(item.category)}</div>
          <div class="setting-val">${escapeHtml(item.setting)}</div>
          <p class="setting-why">${escapeHtml(item.why)}</p>
        </div>
      `
      )
      .join("");

    document.getElementById("gimbalMovesGrid").innerHTML = gimbalMoves
      .map(
        (m) => `
        <div class="gimbal-card">
          <div class="gimbal-card-top">
            <div class="gimbal-svg-box">${getGimbalSvg(m.id)}</div>
            <div>
              <h4>${escapeHtml(m.name)}</h4>
              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <span class="badge badge-blue">${escapeHtml(m.mode)}</span>
                <span class="badge badge-green">Độ khó: ${escapeHtml(m.difficulty)}</span>
              </div>
            </div>
          </div>
          <p>${escapeHtml(m.how)}</p>
          <div class="gimbal-use">📍 Áp dụng: ${escapeHtml(m.useIn)}</div>
        </div>
      `
      )
      .join("");

    document.getElementById("lightRulesList").innerHTML = lightRules
      .map((lr) => {
        const badgeClass =
          lr.badge === "off" ? "badge-blue" : lr.badge === "on" ? "badge-amber" : "badge-violet";
        return `
          <div class="light-rule-card">
            <div class="light-rule-head">
              <strong>${escapeHtml(lr.situation)}</strong>
              <span class="badge ${badgeClass}">${escapeHtml(lr.status)}</span>
            </div>
            <p>${escapeHtml(lr.tip)}</p>
          </div>
        `;
      })
      .join("");
  }

  // ==================== RENDER CONNECTION & SCHEDULE TAB ====================
  function renderConnectionGuide() {
    const { techniques, shootingSchedule } = DATA.connectionGuide;

    document.getElementById("techniquesGrid").innerHTML = techniques
      .map(
        (t) => `
        <div class="tech-card">
          <h4>${t.icon} ${escapeHtml(t.name)}</h4>
          <p>${escapeHtml(t.concept)}</p>
          <div class="tech-howto"><strong>Cách quay:</strong> ${escapeHtml(t.howToShoot)}</div>
          <div class="tech-scenes">🎬 Dùng đẹp ở: ${escapeHtml(t.bestScenes)}</div>
        </div>
      `
      )
      .join("");

    document.getElementById("scheduleList").innerHTML = shootingSchedule
      .map(
        (s) => `
        <div class="schedule-item">
          <div class="schedule-time">🕒 ${escapeHtml(s.time)}</div>
          <div class="schedule-loc">📍 Khu vực: ${escapeHtml(s.location)}</div>
          <div class="schedule-scenes">${escapeHtml(s.scenes)}</div>
          <p class="schedule-tip">💡 ${escapeHtml(s.tip)}</p>
        </div>
      `
      )
      .join("");

    document.getElementById("durationTableBody").innerHTML =
      DATA.scenes
        .map(
          (scene) => `
          <tr data-open-modal="${scene.id}">
            <td><strong>${escapeHtml(scene.code)}</strong> ${scene.isHighlight ? "⭐" : ""}</td>
            <td>
              <strong>${escapeHtml(scene.title)}</strong><br/>
              <span style="color:#64748b; font-size:0.78rem">${escapeHtml(scene.vnTitle)}</span>
            </td>
            <td><span class="badge badge-blue">${escapeHtml(scene.duration)}</span></td>
            <td>
              <span class="badge ${scene.needsLight ? "badge-amber" : "badge-green"}">
                ${scene.needsLight ? "💡 Bật đèn nhỏ" : "☀️ Ngoài trời"}
              </span>
            </td>
            <td>${escapeHtml(scene.connectionType)}</td>
          </tr>
        `
        )
        .join("") +
      `<tr style="background:#f1f5f9; font-weight:800; cursor:default">
        <td colspan="2">TỔNG THỜI LƯỢNG TOÀN VIDEO (15 PHÂN CẢNH + KẾT)</td>
        <td colspan="3">10 phút 30 giây (630 giây)</td>
      </tr>`;
  }

  // ==================== RENDER CHECKLIST TAB (FOLLOWING SHOOTING ORDER 1 -> 20) ====================
  function renderChecklist() {
    const container = document.getElementById("checklistContainer");
    const htmlParts = [];
    const phaseMeta = {};
    SHOOTING_ORDER.forEach((st) => {
      if (st.phaseTitle) phaseMeta[st.phaseId] = st;
    });

    let lastPhase = null;

    for (const st of SHOOTING_ORDER) {
      let shots = [];
      let prog = { done: 0, total: 0, isComplete: false };
      let titleText = st.labelOverride;
      let codeBadge = `BƯỚC ${String(st.step).padStart(2, "0")}`;
      let needsLight = true;
      let isHighlight = st.kind === "oic";
      let openAttr = `data-open-step="${st.step}"`;

      if (st.kind === "scene") {
        const scene = DATA.scenes.find((s) => s.id === st.sceneId);
        if (!scene) continue;
        shots = scene.shots;
        prog = getSceneProgress(scene);
        needsLight = scene.needsLight;
        isHighlight = scene.isHighlight;
      } else {
        shots = SPECIAL_SHOTS.filter((sh) => sh.stepKey === st.specialId);
        prog = getSpecialProgress(st.specialId);
      }

      const visibleShots = shots.filter((sh) => {
        const done = state.doneShots.has(sh.id);
        if (state.checklistFilter === "todo" && done) return false;
        if (state.checklistFilter === "done" && !done) return false;
        return true;
      });
      if (visibleShots.length === 0) continue;

      if (st.phaseId !== lastPhase) {
        lastPhase = st.phaseId;
        const meta = phaseMeta[st.phaseId];
        if (meta) {
          htmlParts.push(`
            <div class="phase-banner ${meta.phaseColor || ""}" style="margin-bottom:4px;">
              <div>
                <h3 class="phase-banner-title">${escapeHtml(meta.phaseTitle)}</h3>
                <p class="phase-banner-sub">${escapeHtml(meta.phaseSub || "")}</p>
              </div>
            </div>
          `);
        }
      }

      const shotsMarkup = visibleShots
        .map((shot) => {
          const isDone = state.doneShots.has(shot.id);
          return `
            <label class="shot-item ${isDone ? "done" : ""}">
              <input type="checkbox" class="shot-checkbox" data-toggle-shot="${shot.id}" ${isDone ? "checked" : ""} />
              <div class="shot-content">
                <div class="shot-top">
                  <span class="badge badge-green">🏫 ${escapeHtml(shot.campus)}</span>
                  <span class="badge badge-slate">🎥 ${escapeHtml(shot.framing)}</span>
                  <span class="badge badge-violet">🕹️ ${escapeHtml(shot.move)}</span>
                </div>
                <p class="shot-desc">${escapeHtml(shot.desc)}</p>
              </div>
            </label>
          `;
        })
        .join("");

      htmlParts.push(`
        <div class="cl-group">
          <div class="cl-group-head">
            <div class="cl-group-title">
              <span class="badge badge-blue">${codeBadge} • ⏰ ${escapeHtml(st.time)}</span>
              <span>${escapeHtml(titleText)}</span>
              <span class="badge badge-violet">👩‍🏫 ${escapeHtml(st.teacher)}</span>
              ${isHighlight ? `<span class="badge badge-amber">⭐ Điểm nhấn</span>` : ""}
            </div>
            <div style="display:flex; gap:8px; align-items:center;">
              <span class="badge ${needsLight ? "badge-amber" : "badge-green"}">
                ${needsLight ? "💡 Bật đèn nhỏ" : "☀️ Tắt đèn"}
              </span>
              <span class="badge ${prog.isComplete ? "badge-green" : "badge-slate"}">
                ${prog.done}/${prog.total}
              </span>
              <button type="button" class="btn btn-outline btn-sm" ${openAttr}>
                Xem ảnh demo
              </button>
            </div>
          </div>
          <div class="shot-list">${shotsMarkup}</div>
        </div>
      `);
    }

    container.innerHTML =
      htmlParts.length > 0
        ? htmlParts.join("")
        : `<div class="empty-state"><strong>Không có cú máy nào trong mục này!</strong></div>`;
  }

  // ==================== MODAL ====================
  function openModalDescriptor(desc) {
    state.activeModalKey = desc;
    renderModalContent(desc);

    const modal = document.getElementById("sceneModal");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("modalBody").scrollTop = 0;
  }

  function openSceneModal(sceneId) {
    openModalDescriptor({ type: "scene", id: Number(sceneId) });
  }

  function openStepModal(stepNum) {
    openModalDescriptor({ type: "step", step: Number(stepNum) });
  }

  function renderModalContent(desc) {
    if (!desc) return;
    if (desc.type === "step") {
      const idx = SHOOTING_ORDER.findIndex((st) => st.step === desc.step);
      if (idx === -1) return;
      const stepObj = SHOOTING_ORDER[idx];
      const total = SHOOTING_ORDER.length;

      document.getElementById("modalPrevBtn").disabled = idx === 0;
      document.getElementById("modalNextBtn").disabled = idx === total - 1;

      if (stepObj.kind !== "scene") {
        document.getElementById("modalCounter").textContent = `Bước ${stepObj.step} / ${total} — ${stepObj.time}`;
        document.getElementById("modalBody").innerHTML = buildSpecialDetailHtml(stepObj.specialId, stepObj);
        return;
      }

      const scene = DATA.scenes.find((s) => s.id === stepObj.sceneId);
      if (!scene) return;
      document.getElementById("modalCounter").textContent = `Bước ${stepObj.step} / ${total} — ${stepObj.time} (${scene.code})`;
      const bannerCls = stepObj.campusKey === "branch" ? " ribbon-branch" : "";
      const stepTop = `<div class="detail-step-banner${bannerCls}"><span>🗓️ BƯỚC ${String(stepObj.step).padStart(2, "0")} • ⏰ ${escapeHtml(stepObj.time)} • 🏫 ${escapeHtml(stepObj.campus)}</span><span>👩‍🏫 ${escapeHtml(stepObj.teacher)}</span></div>`;
      const html = buildDetailSheetHtml(scene, `modal-step-${stepObj.step}`).replace(
        /(<article class="detail-card[^>]*>)/,
        `$1${stepTop}`
      );
      document.getElementById("modalBody").innerHTML = html;
      return;
    }

    // Scene mode (PC 01 -> 16)
    const idx = DATA.scenes.findIndex((s) => s.id === desc.id);
    if (idx === -1) return;
    const scene = DATA.scenes[idx];
    document.getElementById("modalCounter").textContent = `${idx + 1} / ${DATA.scenes.length} — ${scene.code}`;
    document.getElementById("modalPrevBtn").disabled = idx === 0;
    document.getElementById("modalNextBtn").disabled = idx === DATA.scenes.length - 1;
    document.getElementById("modalBody").innerHTML = buildDetailSheetHtml(scene, "modal");
  }

  function closeSceneModal() {
    state.activeModalKey = null;
    const modal = document.getElementById("sceneModal");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function stepModal(delta) {
    if (!state.activeModalKey) return;
    if (state.activeModalKey.type === "step") {
      const idx = SHOOTING_ORDER.findIndex((st) => st.step === state.activeModalKey.step);
      const nextIdx = idx + delta;
      if (nextIdx >= 0 && nextIdx < SHOOTING_ORDER.length) {
        openStepModal(SHOOTING_ORDER[nextIdx].step);
      }
      return;
    }
    const idx = DATA.scenes.findIndex((s) => s.id === state.activeModalKey.id);
    const nextIdx = idx + delta;
    if (nextIdx >= 0 && nextIdx < DATA.scenes.length) {
      openSceneModal(DATA.scenes[nextIdx].id);
    }
  }

  // ==================== TAB SWITCHING ====================
  function switchTab(tabName) {
    state.activeTab = tabName;
    document.querySelectorAll(".nav-tab").forEach((btn) => {
      const isMatch = btn.dataset.tab === tabName;
      btn.classList.toggle("active", isMatch);
      btn.setAttribute("aria-selected", String(isMatch));
    });
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === `tab-${tabName}`);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ==================== EVENT LISTENERS ====================
  function bindEvents() {
    // Tabs
    document.querySelectorAll(".nav-tab").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    // Search
    document.getElementById("sceneSearch").addEventListener("input", (e) => {
      state.search = e.target.value;
      renderScenes();
    });

    // Compiled Demo Video version switcher
    const vidPlayer = document.getElementById("compiledDemoPlayer");
    const btnVidMaster = document.getElementById("btnVidMaster");
    const btnVidGuide = document.getElementById("btnVidGuide");
    const btnVidClean = document.getElementById("btnVidClean");
    if (vidPlayer && btnVidMaster && btnVidGuide && btnVidClean) {
      const allVidBtns = [btnVidMaster, btnVidGuide, btnVidClean];
      const switchDemoVideo = (src, activeBtn) => {
        const wasPlaying = !vidPlayer.paused;
        vidPlayer.src = src;
        vidPlayer.load();
        if (wasPlaying) {
          vidPlayer.addEventListener("loadedmetadata", () => vidPlayer.play().catch(() => {}), { once: true });
        }
        allVidBtns.forEach((b) => b.classList.toggle("active", b === activeBtn));
      };
      btnVidMaster.addEventListener("click", () =>
        switchDemoVideo("./DaiMo_MASTER_4Khuc_CoLoiBinhEN.mp4", btnVidMaster)
      );
      btnVidGuide.addEventListener("click", () =>
        switchDemoVideo("./DaiMo_FULL_32Canh_HuongDanQuay.mp4", btnVidGuide)
      );
      btnVidClean.addEventListener("click", () =>
        switchDemoVideo("./DaiMo_FULL_32Canh_Sach.mp4", btnVidClean)
      );
    }

    // Order mode toggle (Schedule 1->20 vs Script PC 01->16)
    const btnOrderSchedule = document.getElementById("btnOrderSchedule");
    const btnOrderScript = document.getElementById("btnOrderScript");
    if (btnOrderSchedule && btnOrderScript) {
      btnOrderSchedule.addEventListener("click", () => {
        state.orderMode = "schedule";
        btnOrderSchedule.classList.add("active");
        btnOrderScript.classList.remove("active");
        renderScenes();
      });
      btnOrderScript.addEventListener("click", () => {
        state.orderMode = "script";
        btnOrderScript.classList.add("active");
        btnOrderSchedule.classList.remove("active");
        renderScenes();
      });
    }

    // View mode toggle
    document.getElementById("btnViewGrid").addEventListener("click", () => {
      state.viewMode = "grid";
      document.getElementById("btnViewGrid").classList.add("active");
      document.getElementById("btnViewDetail").classList.remove("active");
      renderScenes();
    });

    document.getElementById("btnViewDetail").addEventListener("click", () => {
      state.viewMode = "detail";
      document.getElementById("btnViewDetail").classList.add("active");
      document.getElementById("btnViewGrid").classList.remove("active");
      renderScenes();
    });

    // Filter pills
    document.getElementById("filterPills").addEventListener("click", (e) => {
      const pill = e.target.closest(".pill[data-filter]");
      if (!pill) return;
      state.filter = pill.dataset.filter;
      document.querySelectorAll("#filterPills .pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderScenes();
    });

    // Checklist filter pills
    document.querySelector(".checklist-filter").addEventListener("click", (e) => {
      const pill = e.target.closest(".pill[data-clfilter]");
      if (!pill) return;
      state.checklistFilter = pill.dataset.clfilter;
      document.querySelectorAll(".checklist-filter .pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderChecklist();
    });

    // Reset progress
    document.getElementById("resetProgressBtn").addEventListener("click", () => {
      if (state.doneShots.size === 0) {
        showToast("Chưa có cú máy nào được tích để đặt lại.");
        return;
      }
      if (confirm("Bạn có chắc muốn xóa toàn bộ dấu tích tiến độ đã quay không?")) {
        state.doneShots.clear();
        saveDoneShots();
        updateProgressUI();
        renderScenes();
        renderChecklist();
        showToast("Đã đặt lại toàn bộ tiến độ quay về 0.");
      }
    });

    // Print button
    document.getElementById("printBtn").addEventListener("click", () => {
      window.print();
    });

    // Modal controls
    document.getElementById("modalCloseBtn").addEventListener("click", closeSceneModal);
    document.getElementById("modalPrevBtn").addEventListener("click", () => stepModal(-1));
    document.getElementById("modalNextBtn").addEventListener("click", () => stepModal(1));
    document.getElementById("sceneModal").addEventListener("click", (e) => {
      if (e.target.id === "sceneModal") closeSceneModal();
    });

    document.addEventListener("keydown", (e) => {
      if (state.activeModalKey === null) return;
      if (e.key === "Escape") closeSceneModal();
      if (e.key === "ArrowLeft") stepModal(-1);
      if (e.key === "ArrowRight") stepModal(1);
    });

    // Global delegated clicks (Open modal, Copy Prompt, Viewfinder overlays)
    document.addEventListener("click", (e) => {
      // Copy prompt
      const copyBtn = e.target.closest("[data-copy-prompt]");
      if (copyBtn) {
        e.stopPropagation();
        const [sceneIdStr, promptIdxStr] = copyBtn.dataset.copyPrompt.split("-");
        const scene = DATA.scenes.find((s) => s.id === Number(sceneIdStr));
        const promptObj = scene && scene.aiPrompts[Number(promptIdxStr)];
        if (promptObj) {
          copyToClipboard(promptObj.prompt, copyBtn);
        }
        return;
      }

      // Copy extra shot prompt
      const copyExtraBtn = e.target.closest("[data-copy-extra]");
      if (copyExtraBtn) {
        e.stopPropagation();
        const extraObj = getExtraShot(Number(copyExtraBtn.dataset.copyExtra));
        if (extraObj) {
          copyToClipboard(extraObj.prompt, copyExtraBtn);
        }
        return;
      }

      // Swap viewfinder image between Primary (A) and Supplemental (B)
      const swapBtn = e.target.closest("[data-vf-swap]");
      if (swapBtn) {
        const box = document.getElementById(swapBtn.dataset.vfSwap);
        const img = box && box.querySelector("img.viewfinder-img");
        if (img) {
          const showingB = swapBtn.classList.toggle("active");
          img.src = showingB ? swapBtn.dataset.imgB : swapBtn.dataset.imgA;
          swapBtn.textContent = showingB
            ? "🔄 Đang xem Ảnh bổ sung (2/2) — Về Ảnh chính"
            : "🔄 Đổi sang Ảnh bổ sung (2/2)";
        }
        return;
      }

      // Viewfinder overlay toggle
      const vfBtn = e.target.closest("[data-vf-toggle]");
      if (vfBtn) {
        const cls = vfBtn.dataset.vfToggle;
        const target = document.getElementById(vfBtn.dataset.vfTarget);
        if (target) {
          const isNowOn = target.classList.toggle(cls);
          vfBtn.classList.toggle("active", isNowOn);
        }
        return;
      }

      // Open step modal (1..20 exact shooting order)
      const openStepTrigger = e.target.closest("[data-open-step]");
      if (openStepTrigger) {
        openStepModal(openStepTrigger.dataset.openStep);
        return;
      }

      // Open modal (ignore if clicking inside button or checkbox)
      const openTrigger = e.target.closest("[data-open-modal]");
      if (openTrigger) {
        openSceneModal(openTrigger.dataset.openModal);
      }
    });

    // Delegated checkbox changes
    document.addEventListener("change", (e) => {
      const cb = e.target.closest("[data-toggle-shot]");
      if (cb) {
        toggleShotDone(cb.dataset.toggleShot);
      }
    });
  }

  // ==================== INIT ====================
  function init() {
    renderGearGuide();
    renderConnectionGuide();
    renderScenes();
    renderSpecialScenes();
    renderExtraShots();
    renderChecklist();
    updateProgressUI();
    bindEvents();
  }

  init();
})();
