window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



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



