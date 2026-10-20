/**
 * 20.10 CELEBRATION • HAUTE COUTURE & MINIMAL LUXURY
 * Themes: Editorial (Fashion/Magazine), Apple (Soft Modern), Cinematic (Midnight Subtitle)
 */

// ================= DATA & WISHES =================

const POETIC_WISHES = {
  crush: [
    "Giữa thế giới vội vã, sự dịu dàng và kiên định của em là điều quý giá nhất. Chúc em một ngày 20.10 an yên, tự do và luôn tỏa sáng theo cách của riêng mình.",
    "Em không cần phải gồng mình để trở nên hoàn hảo. Mong em luôn được bao bọc bởi yêu thương, bình yên trong tâm hồn và rạng rỡ mỗi sớm mai.",
    "Cảm ơn em vì đã hiện diện, mang theo ấm áp và sự thanh khiết bước vào cuộc đời anh. Chúc em một ngày 20.10 trọn vẹn niềm vui và hạnh phúc.",
    "Mong em luôn giữ được nụ cười không vướng muộn phiền. Dù ngoài kia bão giông thế nào, nơi đây vẫn luôn có người thương và trân quý em hết lòng."
  ],
  mom: [
    "Mẹ là đóa hoa không đòi hỏi được tôn vinh, nhưng luôn âm thầm tỏa hương che chở suốt năm tháng. Kính chúc Mẹ một ngày 20.10 nhẹ gánh lo toan, luôn khỏe mạnh và an lòng.",
    "Cảm ơn Mẹ đã luôn là bến đỗ bình yên nhất để con tìm về sau những chênh vênh. Chúc Mẹ mỗi ngày trôi qua đều là những khoảnh khắc nhẹ nhàng, thanh thản.",
    "Công ơn và đức hy sinh của Mẹ là điều thiêng liêng nhất đời con. Con mong Mẹ luôn an vui, sống thật lâu và dồi dào sức khỏe bên gia đình."
  ],
  teacher: [
    "Tri thức và sự tận tâm của Cô là ngọn đèn soi sáng từng bước đường chúng em đi. Kính chúc Cô luôn giữ mãi nhiệt huyết, nụ cười hiền hậu và nhiều niềm vui trong sự nghiệp trồng người.",
    "Nhân ngày 20.10, xin gửi tới Cô lòng tri ân sâu sắc nhất. Chúc Cô luôn mạnh khỏe, an nhiên và gặt hái thêm nhiều thành tựu cao quý."
  ],
  colleague: [
    "Chúc bạn luôn giữ trọn ngọn lửa nhiệt huyết, bản lĩnh sắc sảo trong công việc và nét duyên dáng, an yên trong tâm hồn.",
    "Gửi đến người đồng nghiệp tài năng lời chúc 20.10 rực rỡ. Mong bạn luôn tự tin, vượt qua mọi thử thách và hạnh phúc trên hành trình mình chọn."
  ],
  friend: [
    "Chúc bạn thân yêu luôn giữ được sự trong trẻo trong ánh mắt, nụ cười yêu đời và can đảm bước tiếp trên con đường mơ ước.",
    "Hôm nay là ngày của bạn. Hãy tạm gác lại những âu lo thường nhật, yêu thương bản thân nhiều hơn và tận hưởng một ngày 20.10 thật ngọt ngào."
  ],
  male: [
    "Hôm nay 20.10 là ngày để trân trọng những người phụ nữ tuyệt vời quanh mình. Chúc bạn một ngày thật hào phóng, ấm áp và mang lại thật nhiều nụ cười cho mẹ, người thương và các đồng nghiệp nữ!",
    "Chúc chàng trai một ngày 20.10 chuẩn phong độ soái ca ga-lăng, luôn là chỗ dựa vững chãi và lan tỏa năng lượng yêu thương đến phái đẹp."
  ]
};

const MALE_NAMES = [
  "tuấn", "nam", "hùng", "dũng", "huy", "hoàng", "minh", "long", "cường", 
  "thắng", "hải", "quân", "đạt", "đức", "trung", "hiếu", "tiến", "sơn", 
  "phong", "vũ", "khang", "kiên", "tùng", "an", "bình", "phúc", "khoa", 
  "nghĩa", "trọng", "duy", "bách", "thành", "toàn", "lâm", "bảo", "quang"
];

// ================= STATE =================

const state = {
  theme: "editorial", // 'editorial' | 'apple' | 'cinematic'
  recipientName: "Lan",
  role: "crush",
  customWish: "",
  senderName: "",
  isOpened: false,
  isMusicPlaying: false
};

// ================= DOM ELEMENTS =================

const htmlRoot = document.documentElement;
const themeButtons = document.querySelectorAll(".theme-btn");
const musicToggleBtn = document.getElementById("musicToggleBtn");
const bgMusic = document.getElementById("bgMusic");

const sealTrigger = document.getElementById("sealTrigger");
const envelopeStage = document.getElementById("envelopeStage");
const cardStage = document.getElementById("cardStage");

const cardRecipientName = document.getElementById("cardRecipientName");
const cardWishMessage = document.getElementById("cardWishMessage");
const cardSenderDisplay = document.getElementById("cardSenderDisplay");
const lineArtFlower = document.getElementById("lineArtFlower");

const cycleQuoteBtn = document.getElementById("cycleQuoteBtn");
const downloadStoryBtn = document.getElementById("downloadStoryBtn");
const copyShareBtn = document.getElementById("copyShareBtn");
const shareUrlDisplay = document.getElementById("shareUrlDisplay");
const createOtherBtn = document.getElementById("createOtherBtn");

const openCreatorBtn = document.getElementById("openCreatorBtn");
const creatorModal = document.getElementById("creatorModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const applyCardBtn = document.getElementById("applyCardBtn");
const inputName = document.getElementById("inputName");
const inputWish = document.getElementById("inputWish");
const inputSender = document.getElementById("inputSender");
const roleItems = document.querySelectorAll(".role-item");

const toast = document.getElementById("toast");

// Story Export Elements
const storyCard = document.getElementById("storyCard");
const storyName = document.getElementById("storyName");
const storyWish = document.getElementById("storyWish");
const storySenderName = document.getElementById("storySenderName");
const storyFlowerContainer = document.getElementById("storyFlowerContainer");

// ================= INITIALIZATION =================

document.addEventListener("DOMContentLoaded", () => {
  parseUrlParams();
  setupEventListeners();
  initAmbientCanvas();
  updateCardDOM();
  updateShareUrl();
});

// Parse ?ten=Lan&role=crush&theme=editorial&chuc=...&from=...
function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const ten = params.get("ten") || params.get("name");
  const role = params.get("role");
  const theme = params.get("theme");
  const chuc = params.get("chuc") || params.get("msg");
  const from = params.get("from");

  if (theme && ["editorial", "apple", "cinematic"].includes(theme)) {
    setTheme(theme);
  }

  if (ten && ten.trim()) {
    state.recipientName = ten.trim();
  }

  if (!role && isMaleName(state.recipientName)) {
    state.role = "male";
  } else if (role && POETIC_WISHES[role]) {
    state.role = role;
  }

  if (chuc && chuc.trim()) {
    state.customWish = chuc.trim();
  }

  if (from && from.trim()) {
    state.senderName = from.trim();
  }

  // Prepopulate modal form
  inputName.value = state.recipientName;
  inputWish.value = state.customWish;
  inputSender.value = state.senderName;
  roleItems.forEach(item => {
    if (item.dataset.role === state.role) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function isMaleName(name) {
  if (!name) return false;
  const parts = name.toLowerCase().trim().split(/\s+/);
  return MALE_NAMES.includes(parts[parts.length - 1]);
}

// ================= THEME SWITCHER =================

function setTheme(newTheme) {
  state.theme = newTheme;
  htmlRoot.setAttribute("data-theme", newTheme);

  themeButtons.forEach(btn => {
    if (btn.dataset.style === newTheme) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  updateShareUrl();
}

// ================= EVENT LISTENERS =================

function setupEventListeners() {
  // Theme switcher buttons
  themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      setTheme(btn.dataset.style);
      renderWishContent();
    });
  });

  // Open seal trigger
  sealTrigger.addEventListener("click", triggerOpenCard);
  sealTrigger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      triggerOpenCard();
    }
  });

  // Music toggle
  musicToggleBtn.addEventListener("click", toggleMusic);

  // Quote switch
  cycleQuoteBtn.addEventListener("click", () => {
    state.customWish = "";
    inputWish.value = "";
    renderWishContent();
    updateShareUrl();
    showToast("Đã đổi sang câu chúc mới ✨");
  });

  // Share buttons
  copyShareBtn.addEventListener("click", copyShareLink);
  const copyUrlBtn = document.getElementById("copyUrlBtn");
  if (copyUrlBtn) copyUrlBtn.addEventListener("click", copyShareLink);

  // Story Download
  downloadStoryBtn.addEventListener("click", exportStoryImage);

  // Modal open / close
  openCreatorBtn.addEventListener("click", () => openModal(true));
  if (createOtherBtn) createOtherBtn.addEventListener("click", () => openModal(true));
  closeModalBtn.addEventListener("click", () => openModal(false));
  creatorModal.addEventListener("click", (e) => {
    if (e.target === creatorModal) openModal(false);
  });

  // Modal Role grid selection
  roleItems.forEach(item => {
    item.addEventListener("click", () => {
      roleItems.forEach(r => r.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Modal Submit
  applyCardBtn.addEventListener("click", () => {
    const valName = inputName.value.trim();
    if (!valName) {
      showToast("Vui lòng nhập tên người nhận 🌸");
      inputName.focus();
      return;
    }

    state.recipientName = valName;
    const activeRole = document.querySelector(".role-item.active");
    state.role = activeRole ? activeRole.dataset.role : "crush";
    state.customWish = inputWish.value.trim();
    state.senderName = inputSender.value.trim();

    openModal(false);
    updateCardDOM();
    updateShareUrl();

    if (!state.isOpened) {
      triggerOpenCard();
    } else {
      renderWishContent();
      triggerFlowerRedraw();
      showToast("Đã cập nhật thiệp thành công!");
    }
  });
}

// ================= CARD REVEAL & CONTENT =================

function triggerOpenCard() {
  if (state.isOpened) return;
  state.isOpened = true;

  playChime();
  sealTrigger.classList.add("breaking");

  setTimeout(() => {
    envelopeStage.classList.add("hidden");
    cardStage.classList.remove("hidden");
    cardStage.classList.add("active");

    updateCardDOM();
    triggerFlowerRedraw();
  }, 650);
}

function updateCardDOM() {
  cardRecipientName.textContent = state.recipientName;
  storyName.textContent = state.recipientName;

  if (state.senderName) {
    cardSenderDisplay.textContent = state.senderName;
    storySenderName.textContent = state.senderName;
  } else {
    cardSenderDisplay.textContent = "Từ một người luôn dõi theo bạn";
    storySenderName.textContent = "Từ một người luôn dõi theo bạn";
  }

  renderWishContent();

  // Clone SVG flower into story container
  if (storyFlowerContainer && lineArtFlower) {
    storyFlowerContainer.innerHTML = lineArtFlower.outerHTML;
  }
}

function renderWishContent() {
  let wishText = "";
  if (state.customWish) {
    wishText = state.customWish;
  } else {
    const pool = POETIC_WISHES[state.role] || POETIC_WISHES.crush;
    wishText = pool[Math.floor(Math.random() * pool.length)];
  }

  storyWish.textContent = wishText;

  // Render text based on theme:
  // In Apple theme, use word-by-word reveal for ultra-smooth feel
  if (state.theme === "apple") {
    const words = wishText.split(" ");
    cardWishMessage.innerHTML = words
      .map(w => `<span class="word-fade">${w} </span>`)
      .join("");

    const wordSpans = cardWishMessage.querySelectorAll(".word-fade");
    wordSpans.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("revealed");
      }, idx * 45);
    });
  } else {
    // Editorial & Cinematic: pure poetic typography
    cardWishMessage.style.opacity = "0";
    cardWishMessage.style.transform = "translateY(8px)";
    setTimeout(() => {
      cardWishMessage.textContent = wishText;
      cardWishMessage.style.opacity = "1";
      cardWishMessage.style.transform = "translateY(0)";
    }, 150);
  }
}

function triggerFlowerRedraw() {
  const paths = document.querySelectorAll(".draw-path");
  paths.forEach(p => {
    p.style.animation = "none";
    // Trigger reflow
    void p.offsetHeight;
    p.style.animation = "";
  });
}

// ================= MODAL HELPERS =================

function openModal(isOpen) {
  if (isOpen) {
    creatorModal.classList.remove("hidden");
    inputName.focus();
  } else {
    creatorModal.classList.add("hidden");
  }
}

// ================= SHARE LINK & CLIPBOARD =================

function updateShareUrl() {
  const baseUrl = window.location.origin + window.location.pathname;
  const params = new URLSearchParams();
  params.set("ten", state.recipientName);
  params.set("role", state.role);
  params.set("theme", state.theme);

  if (state.customWish) {
    params.set("chuc", state.customWish);
  }
  if (state.senderName) {
    params.set("from", state.senderName);
  }

  const fullUrl = `${baseUrl}?${params.toString()}`;
  shareUrlDisplay.value = fullUrl;
}

function copyShareLink() {
  updateShareUrl();
  shareUrlDisplay.select();
  shareUrlDisplay.setSelectionRange(0, 99999);

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareUrlDisplay.value)
      .then(() => showToast("✓ Đã sao chép link gửi tặng!"))
      .catch(() => fallbackCopy());
  } else {
    fallbackCopy();
  }
}

function fallbackCopy() {
  try {
    document.execCommand("copy");
    showToast("✓ Đã sao chép link gửi tặng!");
  } catch (e) {
    showToast("Vui lòng tự bôi đen và sao chép đường dẫn!");
  }
}

// ================= 9:16 STORY EXPORT (HTML2CANVAS) =================

function exportStoryImage() {
  showToast("Đang tạo ảnh Story 9:16 sắc nét... ⏳");

  if (typeof html2canvas === "undefined") {
    showToast("Thư viện ảnh đang tải, vui lòng thử lại sau 2 giây!");
    return;
  }

  // Pre-update story card elements
  storyName.textContent = state.recipientName;
  storyWish.textContent = state.customWish || (cardWishMessage.textContent || storyWish.textContent);
  if (storyFlowerContainer && lineArtFlower) {
    storyFlowerContainer.innerHTML = lineArtFlower.outerHTML;
  }

  html2canvas(storyCard, {
    scale: 2, // 1080 x 1920 pixels output for crisp Instagram/Facebook Story
    useCORS: true,
    backgroundColor: null,
    logging: false
  }).then(canvas => {
    const link = document.createElement("a");
    const safeName = state.recipientName.replace(/\s+/g, "-").toLowerCase();
    link.download = `story-20.10-${safeName}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("✓ Đã lưu ảnh Story 9:16 thành công! 📸");
  }).catch(err => {
    console.error("Lỗi xuất ảnh story:", err);
    showToast("Không thể tạo ảnh trên trình duyệt này. Bạn hãy chụp màn hình nhé!");
  });
}

// ================= AUDIO & MUSIC SYNTHESIZER =================

let audioCtx = null;

function playChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === "suspended") audioCtx.resume();

    // Pure crystal harmonic frequencies (F5, A5, C6)
    const notes = [698.46, 880.00, 1046.50];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.12);

      gain.gain.setValueAtTime(0.0001, audioCtx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + i * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + i * 0.12 + 1.6);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(audioCtx.currentTime + i * 0.12);
      osc.stop(audioCtx.currentTime + i * 0.12 + 1.7);
    });
  } catch (e) {}
}

let synthInterval = null;
const RELAXING_PROGRESSION = [
  [349.23, 440.00, 523.25], // F major
  [392.00, 493.88, 587.33], // G major
  [261.63, 329.63, 392.00], // C major
  [220.00, 261.63, 329.63]  // A minor
];

function toggleMusic() {
  if (state.isMusicPlaying) {
    state.isMusicPlaying = false;
    musicToggleBtn.classList.remove("playing");
    try { bgMusic.pause(); } catch(e) {}
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }
    showToast("Đã tắt âm thanh");
  } else {
    state.isMusicPlaying = true;
    musicToggleBtn.classList.add("playing");

    bgMusic.play().catch(() => {
      startAmbientSynth();
    });
    showToast("Đang phát giai điệu êm dịu 🎵");
  }
}

function startAmbientSynth() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!audioCtx && AudioContext) audioCtx = new AudioContext();
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();

  let idx = 0;
  playSoftChord(RELAXING_PROGRESSION[idx]);

  synthInterval = setInterval(() => {
    idx = (idx + 1) % RELAXING_PROGRESSION.length;
    playSoftChord(RELAXING_PROGRESSION[idx]);
  }, 2800);
}

function playSoftChord(chord) {
  if (!audioCtx) return;
  chord.forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.25);

    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime + i * 0.25);
    gain.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + i * 0.25 + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + i * 0.25 + 2.4);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime + i * 0.25);
    osc.stop(audioCtx.currentTime + i * 0.25 + 2.5);
  });
}

// ================= TOAST HELPER =================

let toastTimer = null;
function showToast(text) {
  if (toastTimer) clearTimeout(toastTimer);
  toast.textContent = text;
  toast.classList.remove("hidden");
  toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 3200);
}

// ================= AMBIENT CANVAS (DRIFTING DUST & STARS) =================

function initAmbientCanvas() {
  const canvas = document.getElementById("ambientCanvas");
  const ctx = canvas.getContext("2d");

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const count = 40;
  const particles = [];

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function loop() {
    ctx.clearRect(0, 0, w, h);

    const isCinematic = state.theme === "cinematic";
    ctx.fillStyle = isCinematic ? "#F59E0B" : "#881337";

    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.y < -10) {
        p.y = h + 10;
        p.x = Math.random() * w;
      }
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }

  loop();
}
