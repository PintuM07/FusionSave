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
// const hero = document.querySelector('.hero');
// const images = [
//   '/image/bg1.jpg',
//   '/image/bg2.png',
//   '/image/bg10.jpg'
// ];

function changeBackground() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  hero.style.background = `url('${randomImage}') no-repeat center center/cover`;
}

// First load
// changeBackground();

// Change every 1 seconds (slideshow effect)
// setInterval(changeBackground, 5000);
// Calculator Logic
document.getElementById("calculateBtn").addEventListener("click", function () {
  const spend = document.getElementById("spend").value;
  const resultBox = document.getElementById("result");
  const savingsText = document.getElementById("savingsText");

  let savingsMsg = "";

  switch (spend) {
    case "100000":
      savingsMsg =
        "With an annual spend of less than $100,000, you could save $20,000 – $40,000 every year.";
      break;
    case "250000":
      savingsMsg =
        "With an annual spend of $100,000 – $250,000, you could save $50,000 – $75,000 every year.";
      break;
    case "500000":
      savingsMsg =
        "With an annual spend of $250,000 – $500,000, you could save $75,000 – $150,000 every year.";
      break;
    case "1000000":
      savingsMsg =
        "With an annual spend of $500,000 – $1,000,000, you could save $150,000 – $300,000 every year.";
      break;
    case "1000000plus":
      savingsMsg =
        "With an annual spend of over $1,000,000, you could save more than $300,000 every year.";
      break;
    default:
      savingsMsg = "Please select your annual spend range.";
  }

  if (spend) {
    resultBox.classList.remove("hidden");
    savingsText.classList.remove("show"); // reset
    setTimeout(() => {
      savingsText.textContent = savingsMsg;
      savingsText.classList.add("show");
    }, 50);
  }
});

// Scroll Animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    ".about, .dashboard, #calculator, #services, .testimonials, #contact"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");

          // Dashboard stagger cards
          if (entry.target.classList.contains("dashboard")) {
            const cards = entry.target.querySelectorAll(".card");
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add("show"), i * 200);
            });
          }

          // Services stagger
          if (entry.target.id === "services") {
            const services = entry.target.querySelectorAll(".service");
            services.forEach((service, i) => {
              setTimeout(() => service.classList.add("show"), i * 250);
            });
          }

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    section.classList.add("section-hidden");
    observer.observe(section);
  });
});


  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
    {
      pageLanguage: 'en',  // Original page language
      includedLanguages: 'en,hi,es,fr,de,bn,ar,zh-CN,ja,ru,it,pt,tr,ko,nl,pl,sv,th,vi,uk,el,he,ta,te,gu,pa',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
      'google_translate_element'
    );
  }
