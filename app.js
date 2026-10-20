/**
 * CHÚC MỪNG NGÀY PHỤ NỮ VIỆT NAM 20/10
 * Interactive Web Application with 3D Envelope, Blooming Flowers,
 * Typewriter Greeting, Petals Rain, Fireworks & Shareable Links.
 */

// ================= CONSTANTS & DATA =================

const COMMON_MALE_NAMES = [
  "tuấn", "nam", "hùng", "dũng", "huy", "hoàng", "minh", "long", "cường", 
  "thắng", "hải", "quân", "đạt", "đức", "trung", "hiếu", "tiến", "sơn", 
  "phong", "vũ", "khang", "kiên", "tùng", "an", "bình", "phúc", "khoa", 
  "nghĩa", "trọng", "duy", "bách", "thành", "toàn", "lâm", "bảo", "quang", 
  "nhật", "việt", "hưng", "thái", "khánh", "hà", "chí", "lộc", "đăng"
];

const WISH_COLLECTIONS = {
  crush: [
    "Nhân ngày 20/10, chúc em luôn xinh đẹp, rạng rỡ và ngập tràn hạnh phúc. Cảm ơn em vì đã đến và làm thế giới của anh trở nên dịu dàng, ngọt ngào hơn mỗi ngày. Mãi yêu em! 💖",
    "Gửi người con gái anh yêu thương nhất! Chúc em có một ngày 20/10 thật nhiều niềm vui, luôn nở nụ cười toả nắng trên môi. Mọi điều tốt đẹp nhất trên đời này anh đều muốn dành tặng riêng em.",
    "Chúc em yêu ngày 20/10 thật ấm áp. Anh hứa sẽ luôn là bờ vai vững chãi, luôn lắng nghe và đồng hành cùng em qua mọi tháng ngày bình yên phía trước. Yêu em rất nhiều!",
    "Hôm nay là ngày của em, và cũng là ngày anh muốn nhắc lại rằng: Có em trong đời là điều may mắn nhất đối với anh. Chúc cô gái nhỏ của anh luôn được yêu chiều và hạnh phúc!",
    "20/10 rực rỡ nhé tình yêu của anh! Chúc em luôn tự tin, yêu đời và mãi là công chúa nhỏ đáng yêu nhất trong lòng anh."
  ],
  mom: [
    "Mẹ kính yêu! Nhân ngày Phụ nữ Việt Nam 20/10, con kính chúc Mẹ luôn dồi dào sức khỏe, an vui và nụ cười luôn nở trên môi. Cảm ơn Mẹ vì cả đời đã hy sinh và dành trọn tình thương bao la cho chúng con. Con yêu Mẹ vô cùng! 🌸",
    "Gửi Mẹ yêu! Hôm nay là ngày để tôn vinh Mẹ - người phụ nữ vĩ đại nhất đời con. Con chúc Mẹ luôn bình an, mạnh khỏe để luôn là điểm tựa ấm áp cho cả gia đình. Cảm ơn Mẹ vì tất cả!",
    "Chúc Mẹ 20/10 thật nhiều niềm vui và hạnh phúc! Dù mai này con đi xa đến đâu, vòng tay Mẹ vẫn là nơi ấm áp nhất. Con mong Mẹ luôn sống vui, sống khỏe mỗi ngày!",
    "Mẹ ơi, hôm nay con chỉ muốn nói rằng con biết ơn và yêu Mẹ rất nhiều! Chúc Mẹ một ngày 20/10 thật ấm cúng, bớt lo toan và luôn cảm nhận được tình yêu của chúng con dành cho Mẹ."
  ],
  teacher: [
    "Kính gửi Cô giáo kính mến! Nhân ngày 20/10, em xin gửi tới Cô lời chúc sức khỏe, hạnh phúc và thành công. Cảm ơn Cô đã luôn tận tâm chắp cánh cho những ước mơ của chúng em bay cao! 💐",
    "Chúc Cô một ngày 20/10 ngập tràn hoa thơm, niềm vui và sự kính trọng của bao thế hệ học trò. Mong Cô luôn giữ mãi ngọn lửa nhiệt huyết với sự nghiệp trồng người cao quý!",
    "Nhân ngày Phụ nữ Việt Nam, em kính chúc Cô luôn tươi trẻ, tràn đầy năng lượng và gặt hái thêm nhiều thành tựu rực rỡ trong giảng dạy!"
  ],
  colleague: [
    "Chúc chị/em một ngày 20/10 thật rực rỡ, luôn tươi trẻ, công việc thuận lợi, KPI vượt mốc và tiền về đầy ví! Cảm ơn vì đã luôn là mảnh ghép tuyệt vời trong team chúng ta! ✨",
    "Gửi đóa hoa tươi thắm nhất tới người đồng nghiệp tài năng và duyên dáng! Chúc bạn ngày 20/10 nhận được cơn mưa quà tặng và luôn giữ vững phong độ rạng ngời!",
    "Chúc toàn thể chị em trong công ty ngày 20/10 thật hạnh phúc, vừa giỏi việc nước vừa đảm việc nhà, lúc nào cũng rạng rỡ và thăng tiến không ngừng!"
  ],
  friend: [
    "Chúc bạn thân yêu ngày 20/10 thật xinh đẹp, sớm có người yêu (nếu chưa có) hoặc luôn được cưng chiều như công chúa! Cứ luôn tỏa sáng và yêu đời như bây giờ nhé! 🎉",
    "Happy 20/10 nhỏ bạn thân chí cốt! Chúc mày ăn ngon mặc đẹp, bớt deadline, nhiều tiền xài và mãi là chỗ dựa tinh thần siêu xịn của tao nha!",
    "20/10 chúc cô bạn tuyệt vời của tui luôn giữ được nụ cười rạng rỡ trên môi, mọi ước mơ đều sớm thành hiện thực và luôn luôn hạnh phúc!"
  ],
  male: [
    "Ủa alo! Hôm nay ngày 20/10 là ngày của chị em phụ nữ mà đồng chí ơi! 😆 Nhớ galant mua hoa, ting ting hoặc dẫn mẹ, người yêu và các bạn nữ đi chơi nhé! Chúc chàng trai một ngày thật vui vẻ và ga-lăng hết nấc! 🌷",
    "20/10 chúc người anh em hôm nay 'sống sót qua cơn bão quà tặng' thành công! Hãy thể hiện phong độ chuẩn soái ca và đem lại niềm vui cho những người phụ nữ xung quanh nhé!",
    "Thông báo: Hôm nay bạn là khán giả danh dự của ngày 20/10! Chúc bạn ví luôn dày để chuẩn bị hoa và quà thật chu đáo cho các chị em thân yêu nha!"
  ]
};

const FLOWER_METADATA = {
  rose: {
    name: "Hoa Hồng Nhung",
    tag: "Biểu Tượng Tình Yêu & Quyến Rũ",
    render: () => `
      <svg class="flower-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="roseGrad" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stop-color="#fb7185"/>
            <stop offset="60%" stop-color="#e11d48"/>
            <stop offset="100%" stop-color="#881337"/>
          </radialGradient>
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4ade80"/>
            <stop offset="100%" stop-color="#15803d"/>
          </linearGradient>
        </defs>
        <!-- Stem & Leaves -->
        <path class="bloom-stem" d="M100 120 Q95 160 105 195" stroke="url(#stemGrad)" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path class="bloom-leaf" d="M98 145 Q70 135 75 120 C85 122 96 135 98 145 Z" fill="#16a34a"/>
        <path class="bloom-leaf" d="M102 160 Q130 150 125 135 C115 137 104 150 102 160 Z" fill="#15803d"/>
        <!-- Rose Petals Layer 1 (Outer) -->
        <path class="bloom-petal" d="M100 60 C65 60 55 100 95 125 C140 100 135 60 100 60 Z" fill="url(#roseGrad)" opacity="0.95"/>
        <!-- Petals Layer 2 (Middle) -->
        <path class="bloom-petal" style="animation-delay: 0.15s" d="M100 70 C75 70 70 100 100 115 C130 100 125 70 100 70 Z" fill="#be123c"/>
        <path class="bloom-petal" style="animation-delay: 0.25s" d="M85 75 C70 90 90 110 100 115 C110 100 115 80 85 75 Z" fill="#e11d48"/>
        <!-- Inner Petals Spiral -->
        <circle cx="100" cy="88" r="14" fill="#9f1239"/>
        <path d="M95 85 Q100 78 105 85 Q108 92 100 95 Q92 92 95 85" fill="none" stroke="#fecdd3" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `
  },
  tulip: {
    name: "Hoa Tulip Pastel",
    tag: "Thanh Lịch & Dịu Dàng Khôn Tả",
    render: () => `
      <svg class="flower-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tulipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#f472b6"/>
            <stop offset="50%" stop-color="#fb7185"/>
            <stop offset="100%" stop-color="#db2777"/>
          </linearGradient>
        </defs>
        <!-- Stem -->
        <path class="bloom-stem" d="M100 115 Q95 155 100 195" stroke="#16a34a" stroke-width="6" fill="none" stroke-linecap="round"/>
        <!-- Long Leaves -->
        <path class="bloom-leaf" d="M96 150 Q60 110 70 80 Q85 120 96 150 Z" fill="#22c55e"/>
        <path class="bloom-leaf" d="M104 165 Q140 120 130 90 Q115 135 104 165 Z" fill="#15803d"/>
        <!-- Tulip Petals Cup -->
        <path class="bloom-petal" d="M80 70 C70 105 85 125 100 125 C115 125 130 105 120 70 C110 85 90 85 80 70 Z" fill="url(#tulipGrad)"/>
        <path class="bloom-petal" style="animation-delay: 0.15s" d="M100 65 C88 80 88 115 100 125 C112 115 112 80 100 65 Z" fill="#f43f5e"/>
      </svg>
    `
  },
  daisy: {
    name: "Cúc Họa Mi",
    tag: "Thuần Khiết & Bình Yên Trong Trẻo",
    render: () => `
      <svg class="flower-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Stem -->
        <path class="bloom-stem" d="M100 110 Q105 150 100 195" stroke="#16a34a" stroke-width="5" fill="none"/>
        <path class="bloom-leaf" d="M100 145 Q80 135 85 125 Q95 135 100 145" fill="#22c55e"/>
        <path class="bloom-leaf" d="M100 160 Q120 150 115 140 Q105 150 100 160" fill="#15803d"/>
        <!-- Daisy Petals radiating around center -->
        <g class="bloom-petal">
          ${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => `
            <ellipse cx="100" cy="58" rx="8" ry="24" fill="#ffffff" stroke="#f1f5f9" stroke-width="1"
              transform="rotate(${deg} 100 85)"/>
          `).join('')}
        </g>
        <!-- Golden Center Pistil -->
        <circle cx="100" cy="85" r="16" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
        <circle cx="98" cy="82" r="3" fill="#fef3c7" opacity="0.8"/>
      </svg>
    `
  },
  sunflower: {
    name: "Hoa Hướng Dương",
    tag: "Luôn Hướng Về Ánh Dương & Nụ Cười",
    render: () => `
      <svg class="flower-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Stem -->
        <path class="bloom-stem" d="M100 115 Q95 155 100 195" stroke="#15803d" stroke-width="7" fill="none"/>
        <path class="bloom-leaf" d="M98 140 Q65 120 70 100 Q90 120 98 140" fill="#16a34a"/>
        <path class="bloom-leaf" d="M102 160 Q135 140 130 120 Q110 140 102 160" fill="#15803d"/>
        <!-- Golden petals -->
        <g class="bloom-petal">
          ${[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(deg => `
            <path d="M100 45 Q106 65 100 85 Q94 65 100 45" fill="#f59e0b"
              transform="rotate(${deg} 100 85)"/>
          `).join('')}
        </g>
        <!-- Center Brown Seed Head with Texture -->
        <circle cx="100" cy="85" r="22" fill="#78350f" stroke="#b45309" stroke-width="2"/>
        <circle cx="100" cy="85" r="16" fill="#451a03" stroke-dasharray="3 3" stroke="#d97706" stroke-width="2"/>
      </svg>
    `
  }
};

const FLOWER_KEYS = ["rose", "tulip", "daisy", "sunflower"];

// ================= APP STATE =================

const state = {
  recipientName: "Lan",
  role: "crush",
  flower: "rose",
  senderName: "",
  customWish: "",
  isEnvelopeOpen: false,
  isMusicPlaying: false,
  typewriterTimeout: null,
  fireworksActive: false
};

// ================= DOM ELEMENTS =================

const envelopeWrapper = document.getElementById("envelopeWrapper");
const envelope = document.getElementById("envelope");
const waxSeal = document.getElementById("waxSeal");
const cardContentWrapper = document.getElementById("cardContentWrapper");
const recipientGreeting = document.getElementById("recipientGreeting");
const roleBadge = document.getElementById("roleBadge");
const wishMessage = document.getElementById("wishMessage");
const senderNameDisplay = document.getElementById("senderNameDisplay");
const flowerContainer = document.getElementById("flowerContainer");
const flowerTag = document.getElementById("flowerTag");
const currentFlowerName = document.getElementById("currentFlowerName");
const shareUrlInput = document.getElementById("shareUrlInput");
const copyShareLinkBtn = document.getElementById("copyShareLinkBtn");
const copySuccessMsg = document.getElementById("copySuccessMsg");

const openCreatorBtn = document.getElementById("openCreatorBtn");
const creatorModal = document.getElementById("creatorModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const previewCardBtn = document.getElementById("previewCardBtn");
const inputRecipientName = document.getElementById("inputRecipientName");
const inputCustomWish = document.getElementById("inputCustomWish");
const inputSenderName = document.getElementById("inputSenderName");

const changeFlowerBtn = document.getElementById("changeFlowerBtn");
const changeQuoteBtn = document.getElementById("changeQuoteBtn");
const toggleFireworkBtn = document.getElementById("toggleFireworkBtn");
const downloadCardBtn = document.getElementById("downloadCardBtn");
const greetingCard = document.getElementById("greetingCard");

const musicToggleBtn = document.getElementById("musicToggleBtn");
const bgMusic = document.getElementById("bgMusic");
const soundWave = document.getElementById("soundWave");
const toastMessage = document.getElementById("toastMessage");

// ================= INITIALIZATION =================

document.addEventListener("DOMContentLoaded", () => {
  parseUrlParameters();
  setupEventListeners();
  initPetalCanvas();
  initFireworksCanvas();
  renderFlower(state.flower);
  updateShareUrl();
});

// Parse query params: ?ten=Lan&role=crush&hoa=rose&from=Nam
function parseUrlParameters() {
  const params = new URLSearchParams(window.location.search);
  const ten = params.get("ten") || params.get("name");
  const role = params.get("role");
  const hoa = params.get("hoa") || params.get("flower");
  const from = params.get("from") || params.get("sender");
  const chuc = params.get("chuc") || params.get("msg") || params.get("loichuc");

  if (ten && ten.trim()) {
    state.recipientName = ten.trim();
  }

  // Detect male name if role is not explicitly provided
  if (!role && isLikelyMaleName(state.recipientName)) {
    state.role = "male";
  } else if (role && WISH_COLLECTIONS[role]) {
    state.role = role;
  }

  if (hoa && FLOWER_METADATA[hoa]) {
    state.flower = hoa;
  }

  if (from) {
    state.senderName = from.trim();
  }

  if (chuc && chuc.trim()) {
    state.customWish = chuc.trim();
  }

  // Sync inputs
  inputRecipientName.value = state.recipientName;
  if (inputCustomWish) inputCustomWish.value = state.customWish;
  inputSenderName.value = state.senderName;
  setRadioValue("recipientRole", state.role);
  setRadioValue("flowerType", state.flower);
}

function isLikelyMaleName(name) {
  if (!name) return false;
  const normalized = name.toLowerCase().trim();
  const words = normalized.split(/\s+/);
  const firstName = words[words.length - 1];
  return COMMON_MALE_NAMES.includes(firstName);
}

// ================= EVENT LISTENERS =================

function setupEventListeners() {
  // Wax seal and envelope open
  waxSeal.addEventListener("click", triggerOpenEnvelope);
  envelope.addEventListener("click", triggerOpenEnvelope);

  // Modal open/close
  openCreatorBtn.addEventListener("click", () => openModal(true));
  const createNewCardBottomBtn = document.getElementById("createNewCardBottomBtn");
  if (createNewCardBottomBtn) {
    createNewCardBottomBtn.addEventListener("click", () => openModal(true));
  }
  closeModalBtn.addEventListener("click", () => openModal(false));
  creatorModal.addEventListener("click", (e) => {
    if (e.target === creatorModal) openModal(false);
  });

  // Role & Flower radio pill toggle highlight
  document.querySelectorAll('input[name="recipientRole"]').forEach(input => {
    input.addEventListener("change", (e) => {
      document.querySelectorAll('.role-pill').forEach(p => p.classList.remove('active'));
      e.target.closest('.role-pill').classList.add('active');
    });
  });

  document.querySelectorAll('input[name="flowerType"]').forEach(input => {
    input.addEventListener("change", (e) => {
      document.querySelectorAll('.flower-pill').forEach(p => p.classList.remove('active'));
      e.target.closest('.flower-pill').classList.add('active');
    });
  });

  // Modal Apply button
  previewCardBtn.addEventListener("click", () => {
    const enteredName = inputRecipientName.value.trim();
    if (!enteredName) {
      showToast("Vui lòng nhập tên người nhận nhé! 🌸");
      inputRecipientName.focus();
      return;
    }

    state.recipientName = enteredName;
    const selectedRole = getRadioValue("recipientRole") || "crush";
    state.role = selectedRole;
    state.flower = getRadioValue("flowerType") || "rose";
    state.customWish = inputCustomWish ? inputCustomWish.value.trim() : "";
    state.senderName = inputSenderName.value.trim();

    openModal(false);
    updateShareUrl();
    
    // Reset view & open card
    resetAndOpenCard();
  });

  // Switch flower button
  changeFlowerBtn.addEventListener("click", cycleNextFlower);

  // Switch quote button
  changeQuoteBtn.addEventListener("click", () => {
    const quotes = WISH_COLLECTIONS[state.role] || WISH_COLLECTIONS.crush;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    typewriterEffect(wishMessage, randomQuote);
    showToast("Đã đổi lời chúc mới! ✨");
  });

  // Fireworks toggle button
  toggleFireworkBtn.addEventListener("click", () => {
    triggerFireworksBurst();
  });

  // Download Card as Image
  downloadCardBtn.addEventListener("click", downloadCardImage);

  // Copy Share Link
  copyShareLinkBtn.addEventListener("click", copyShareLink);

  // Audio Toggle
  musicToggleBtn.addEventListener("click", toggleMusic);
}

// ================= CORE ACTIONS & RENDER =================

function triggerOpenEnvelope() {
  if (state.isEnvelopeOpen) return;
  state.isEnvelopeOpen = true;

  // Sound chime effect using Web Audio API
  playChime();

  // Wax seal breaks
  waxSeal.classList.add("breaking");

  setTimeout(() => {
    envelope.classList.add("open");
  }, 300);

  setTimeout(() => {
    envelopeWrapper.style.display = "none";
    cardContentWrapper.classList.remove("hidden");
    
    updateCardContent();
    renderFlower(state.flower);

    // Auto launch celebratory fireworks
    triggerFireworksBurst();
  }, 1000);
}

function resetAndOpenCard() {
  state.isEnvelopeOpen = true;
  envelopeWrapper.style.display = "none";
  cardContentWrapper.classList.remove("hidden");
  
  updateCardContent();
  renderFlower(state.flower);
  playChime();
  triggerFireworksBurst();
}

function updateCardContent() {
  // Salutation
  if (state.role === "male") {
    recipientGreeting.textContent = `Gửi anh chàng ${state.recipientName} 😎,`;
    roleBadge.textContent = "Bạn Nam";
  } else if (state.role === "mom") {
    recipientGreeting.textContent = `Kính gửi Mẹ ${state.recipientName === "Lan" ? "Yêu" : state.recipientName} 🌸,`;
    roleBadge.textContent = "Mẹ Kính Yêu";
  } else if (state.role === "teacher") {
    recipientGreeting.textContent = `Kính gửi Cô ${state.recipientName} 📚,`;
    roleBadge.textContent = "Cô Giáo";
  } else if (state.role === "colleague") {
    recipientGreeting.textContent = `Gửi ${state.recipientName} thân mến 💼,`;
    roleBadge.textContent = "Đồng Nghiệp";
  } else if (state.role === "friend") {
    recipientGreeting.textContent = `Gửi ${state.recipientName} yêu dấu ✨,`;
    roleBadge.textContent = "Bạn Thân";
  } else {
    recipientGreeting.textContent = `Gửi ${state.recipientName} thân yêu 💖,`;
    roleBadge.textContent = "Người Yêu";
  }

  // Sender display
  if (state.senderName) {
    senderNameDisplay.textContent = `${state.senderName} 💖`;
  } else {
    senderNameDisplay.textContent = "Từ một người luôn quan tâm bạn 💖";
  }

  // Wish Typewriter: Use custom wish if provided, otherwise random pick from role's collection
  let chosenQuote = "";
  if (state.customWish) {
    chosenQuote = state.customWish;
  } else {
    const quotes = WISH_COLLECTIONS[state.role] || WISH_COLLECTIONS.crush;
    chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }
  typewriterEffect(wishMessage, chosenQuote);
}

function renderFlower(type) {
  const meta = FLOWER_METADATA[type] || FLOWER_METADATA.rose;
  flowerContainer.innerHTML = meta.render();
  flowerTag.textContent = meta.tag;
  currentFlowerName.textContent = meta.name;
}

function cycleNextFlower() {
  const currentIndex = FLOWER_KEYS.indexOf(state.flower);
  const nextIndex = (currentIndex + 1) % FLOWER_KEYS.length;
  state.flower = FLOWER_KEYS[nextIndex];
  renderFlower(state.flower);
  updateShareUrl();
  showToast(`Đã đổi sang: ${FLOWER_METADATA[state.flower].name} 💐`);
}

// ================= TYPEWRITER EFFECT =================

function typewriterEffect(element, text) {
  if (state.typewriterTimeout) {
    clearTimeout(state.typewriterTimeout);
  }
  element.textContent = "";
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      // Natural cadence: slightly longer pause at punctuations
      const char = text.charAt(i - 1);
      const delay = (char === "." || char === "!" || char === ",") ? 120 : 35;
      state.typewriterTimeout = setTimeout(type, delay);
    }
  }

  type();
}

// ================= MODAL & FORM HELPERS =================

function openModal(isOpen) {
  if (isOpen) {
    creatorModal.classList.remove("hidden");
    inputRecipientName.focus();
  } else {
    creatorModal.classList.add("hidden");
  }
}

function setRadioValue(name, val) {
  const input = document.querySelector(`input[name="${name}"][value="${val}"]`);
  if (input) {
    input.checked = true;
    const pill = input.closest('label');
    if (pill) {
      pill.parentElement.querySelectorAll('label').forEach(l => l.classList.remove('active'));
      pill.classList.add('active');
    }
  }
}

function getRadioValue(name) {
  const checked = document.querySelector(`input[name="${name}"]:checked`);
  return checked ? checked.value : null;
}

// ================= SHARE LINK & CLIPBOARD =================

function updateShareUrl() {
  const baseUrl = window.location.origin + window.location.pathname;
  const params = new URLSearchParams();
  params.set("ten", state.recipientName);
  params.set("role", state.role);
  params.set("hoa", state.flower);
  if (state.customWish) {
    params.set("chuc", state.customWish);
  }
  if (state.senderName) {
    params.set("from", state.senderName);
  }
  const fullUrl = `${baseUrl}?${params.toString()}`;
  shareUrlInput.value = fullUrl;
}

function copyShareLink() {
  updateShareUrl();
  shareUrlInput.select();
  shareUrlInput.setSelectionRange(0, 99999);

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareUrlInput.value)
      .then(() => handleCopySuccess())
      .catch(() => fallbackCopy());
  } else {
    fallbackCopy();
  }
}

function fallbackCopy() {
  try {
    document.execCommand("copy");
    handleCopySuccess();
  } catch (err) {
    showToast("Không thể tự động sao chép. Vui lòng copy thủ công!");
  }
}

function handleCopySuccess() {
  copySuccessMsg.classList.remove("hidden");
  showToast("✓ Đã sao chép link! Hãy gửi ngay qua Zalo/Messenger");
  setTimeout(() => {
    copySuccessMsg.classList.add("hidden");
  }, 4000);
}

// ================= DOWNLOAD CARD (HTML2CANVAS) =================

function downloadCardImage() {
  showToast("Đang tạo ảnh thiệp độ phân giải cao... ⏳");
  
  if (typeof html2canvas === "undefined") {
    showToast("Đang tải thư viện xử lý ảnh...");
    return;
  }

  html2canvas(greetingCard, {
    scale: 2.5, // High resolution for Retina & Mobile Story
    useCORS: true,
    backgroundColor: "#ffffff",
    logging: false
  }).then(canvas => {
    const link = document.createElement("a");
    const safeName = state.recipientName.replace(/\s+/g, "-").toLowerCase();
    link.download = `thiep-20-10-${safeName}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("✓ Đã lưu ảnh thiệp thành công! Hãy đăng story ngay nhé 📸");
  }).catch(err => {
    console.error("Lỗi tạo ảnh:", err);
    showToast("Chưa thể lưu ảnh trên thiết bị này. Bạn có thể chụp màn hình nhé!");
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

    // Gentle harp / chime chord (C5 - E5 - G5 - C6)
    const freqs = [523.25, 659.25, 783.99, 1046.50];
    freqs.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.1);
      
      gain.gain.setValueAtTime(0.001, audioCtx.currentTime + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + idx * 0.1 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + idx * 0.1 + 1.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(audioCtx.currentTime + idx * 0.1);
      osc.stop(audioCtx.currentTime + idx * 0.1 + 1.3);
    });
  } catch (e) {
    // Ignore audio autostart restrictions
  }
}

// Peaceful continuous background music synthesizer (in case external mp3 blocked)
let synthMusicInterval = null;
const MELODY_CHORDS = [
  [261.63, 329.63, 392.00], // C major
  [220.00, 261.63, 329.63], // A minor
  [174.61, 220.00, 261.63], // F major
  [196.00, 246.94, 293.66]  // G major
];

function startSynthMelody() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!audioCtx && AudioContext) audioCtx = new AudioContext();
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();

  let chordIndex = 0;
  playSynthChord(MELODY_CHORDS[chordIndex]);

  synthMusicInterval = setInterval(() => {
    chordIndex = (chordIndex + 1) % MELODY_CHORDS.length;
    playSynthChord(MELODY_CHORDS[chordIndex]);
  }, 2400);
}

function stopSynthMelody() {
  if (synthMusicInterval) {
    clearInterval(synthMusicInterval);
    synthMusicInterval = null;
  }
}

function playSynthChord(notes) {
  if (!audioCtx) return;
  notes.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.2);

    gain.gain.setValueAtTime(0.001, audioCtx.currentTime + idx * 0.2);
    gain.gain.exponentialRampToValueAtTime(0.06, audioCtx.currentTime + idx * 0.2 + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + idx * 0.2 + 2.0);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime + idx * 0.2);
    osc.stop(audioCtx.currentTime + idx * 0.2 + 2.1);
  });
}

function toggleMusic() {
  if (state.isMusicPlaying) {
    // Stop
    state.isMusicPlaying = false;
    musicToggleBtn.classList.remove("playing");
    try { bgMusic.pause(); } catch(e) {}
    stopSynthMelody();
    showToast("Đã tắt nhạc nền");
  } else {
    // Play
    state.isMusicPlaying = true;
    musicToggleBtn.classList.add("playing");
    
    // Try online mp3 first; if error or blocked, fallback to internal synth
    bgMusic.play().catch(() => {
      startSynthMelody();
    });
    showToast("Đang phát nhạc nền lãng mạn 🎶");
  }
}

// ================= TOAST HELPER =================

let toastTimeout = null;
function showToast(msg) {
  if (toastTimeout) clearTimeout(toastTimeout);
  toastMessage.textContent = msg;
  toastMessage.classList.remove("hidden");
  toastTimeout = setTimeout(() => {
    toastMessage.classList.add("hidden");
  }, 3200);
}

// ================= PETALS CANVAS (FALLING BLOSSOMS) =================

function initPetalCanvas() {
  const canvas = document.getElementById("petalCanvas");
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petalsCount = Math.min(35, Math.floor(width / 30));
  const petals = [];

  for (let i = 0; i < petalsCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 12 + 10,
      speedY: Math.random() * 1.4 + 0.8,
      speedX: Math.random() * 1.2 - 0.6,
      angle: Math.random() * 360,
      angleSpeed: (Math.random() - 0.5) * 2,
      color: Math.random() > 0.4 ? "rgba(251, 113, 133, 0.65)" : "rgba(254, 205, 211, 0.75)"
    });
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.angle * Math.PI) / 180);

    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, 0, 0, p.size);
    ctx.bezierCurveTo(-p.size, 0, -p.size / 2, -p.size / 2, 0, 0);
    ctx.fill();

    ctx.restore();
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let p of petals) {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.y / 40) * 0.5;
      p.angle += p.angleSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      drawPetal(p);
    }

    requestAnimationFrame(render);
  }

  render();
}

// ================= FIREWORKS CANVAS & NAME IN SKY =================

let fireworksCtx = null;
let fireworksCanvas = null;
let fireworksParticles = [];
let fireworkRockets = [];
let nameParticles = [];

function initFireworksCanvas() {
  fireworksCanvas = document.getElementById("fireworksCanvas");
  fireworksCtx = fireworksCanvas.getContext("2d");

  fireworksCanvas.width = window.innerWidth;
  fireworksCanvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;
  });

  animateFireworks();
}

function triggerFireworksBurst() {
  const w = fireworksCanvas.width;
  const h = fireworksCanvas.height;

  // Create 4-6 colorful rockets
  const colors = ["#f43f5e", "#fbbf24", "#ec4899", "#a855f7", "#38bdf8", "#34d399"];
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const startX = w * 0.2 + Math.random() * (w * 0.6);
      const targetY = h * 0.15 + Math.random() * (h * 0.25);
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      fireworkRockets.push({
        x: startX,
        y: h,
        targetY: targetY,
        color: color,
        speed: 8 + Math.random() * 4
      });
    }, i * 250);
  }

  // Also create glowing particle letters of recipient's name in sky!
  setTimeout(() => {
    createNameParticles(state.recipientName);
  }, 800);
}

function createNameParticles(text) {
  if (!fireworksCtx) return;
  const w = fireworksCanvas.width;
  const h = fireworksCanvas.height;

  // Use off-screen buffer to sample text pixels
  const offscreen = document.createElement("canvas");
  const offCtx = offscreen.getContext("2d");
  offscreen.width = w;
  offscreen.height = h;

  const displayText = `✨ 20/10 • ${text.toUpperCase()} ✨`;
  const fontSize = Math.min(42, Math.floor(w / (displayText.length * 0.7)));

  offCtx.font = `bold ${fontSize}px "Playfair Display", serif`;
  offCtx.textAlign = "center";
  offCtx.fillStyle = "#ffffff";
  offCtx.fillText(displayText, w / 2, h * 0.22);

  const imgData = offCtx.getImageData(0, 0, w, h);
  const data = imgData.data;
  const step = 6; // sampling rate

  for (let y = 0; y < h; y += step) {
    for (let x = 0; x < w; x += step) {
      const idx = (y * w + x) * 4;
      if (data[idx + 3] > 128) {
        nameParticles.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          originX: x,
          originY: y,
          alpha: 1,
          size: Math.random() * 2.5 + 1.5,
          color: Math.random() > 0.3 ? "#fbbf24" : "#f43f5e",
          life: 140
        });
      }
    }
  }
}

function animateFireworks() {
  fireworksCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

  // Animate rockets
  for (let i = fireworkRockets.length - 1; i >= 0; i--) {
    const r = fireworkRockets[i];
    r.y -= r.speed;

    // Draw rocket trail
    fireworksCtx.beginPath();
    fireworksCtx.arc(r.x, r.y, 3, 0, Math.PI * 2);
    fireworksCtx.fillStyle = r.color;
    fireworksCtx.fill();

    if (r.y <= r.targetY) {
      explodeRocket(r.x, r.y, r.color);
      fireworkRockets.splice(i, 1);
    }
  }

  // Animate explosion particles
  for (let i = fireworksParticles.length - 1; i >= 0; i--) {
    const p = fireworksParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.05; // gravity
    p.alpha -= 0.015;

    fireworksCtx.beginPath();
    fireworksCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    fireworksCtx.fillStyle = p.color;
    fireworksCtx.globalAlpha = Math.max(0, p.alpha);
    fireworksCtx.fill();
    fireworksCtx.globalAlpha = 1;

    if (p.alpha <= 0) {
      fireworksParticles.splice(i, 1);
    }
  }

  // Animate name sparkle particles
  for (let i = nameParticles.length - 1; i >= 0; i--) {
    const np = nameParticles[i];
    np.life--;
    np.alpha = np.life / 140;

    fireworksCtx.beginPath();
    fireworksCtx.arc(np.x, np.y, np.size, 0, Math.PI * 2);
    fireworksCtx.fillStyle = np.color;
    fireworksCtx.globalAlpha = Math.max(0, np.alpha);
    fireworksCtx.shadowBlur = 8;
    fireworksCtx.shadowColor = np.color;
    fireworksCtx.fill();
    fireworksCtx.shadowBlur = 0;
    fireworksCtx.globalAlpha = 1;

    if (np.life <= 0) {
      nameParticles.splice(i, 1);
    }
  }

  requestAnimationFrame(animateFireworks);
}

function explodeRocket(x, y, color) {
  const count = 45;
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = Math.random() * 4 + 1.5;
    fireworksParticles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      color: color,
      size: Math.random() * 3 + 1.5,
      alpha: 1
    });
  }
}
