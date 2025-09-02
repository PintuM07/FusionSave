// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// =============================
// Chat Functions
// =============================
function toggleChat() {
  const chatBox = document.getElementById("chat-container");
  if (chatBox.style.display === "none" || chatBox.style.display === "") {
    chatBox.style.display = "flex";
  } else {
    chatBox.style.display = "none";
  }
}

async function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userMessage = inputField.value.trim();
  if (!userMessage) return;

  const chatLog = document.getElementById("chat-log");

  // User Message
  const userBubble = `<div class="message user-message">${userMessage}</div>`;
  chatLog.innerHTML += userBubble;
  chatLog.scrollTop = chatLog.scrollHeight;

  inputField.value = "";

  // Fake Bot Reply (replace with API call if needed)
  setTimeout(() => {
    const botBubble = `<div class="message bot-message">Hello! You said: ${userMessage}</div>`;
    chatLog.innerHTML += botBubble;
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 800);
}

// =============================
// Random Hero Background
// =============================
const hero = document.querySelector('.hero');
const images = [
  '/image/bg1.jpg',
  '/image/bg2.jpg',
  '/image/bg3.jpg',
  '/image/bg4.jpg',
  '/image/bg5.jpg',
  '/image/bg6.jpg',
  '/image/bg7.jpg',
  '/image/bg8.jpg',
  '/image/bg9.jpg',
  '/image/bg10.jpg'
];

function changeBackground() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  hero.style.background = `url('${randomImage}') no-repeat center center/cover`;
}

// First load
changeBackground();

// Change every 5 seconds (slideshow effect)
// 👉 Comment out if you want only once on load
setInterval(changeBackground, 5000);
