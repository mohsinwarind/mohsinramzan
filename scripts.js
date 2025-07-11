const text = `> Hello, I'm [Your Name]
> 🧠 Full Stack Web Developer
> 🤖 AI Researcher | 📚 Author
> 🌍 Founder - [Your Non-Profit Name]

> Crafting solutions in code and community.`;

let i = 0;
const speed = 30;

function typeText() {
  if (i < text.length) {
    document.getElementById('terminalText').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}

window.onload = typeText;
const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  const toggle = document.getElementById("themeToggle");
  const body = document.body;

  // Load theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light");
    toggle.textContent = "🌞";
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("light");
    const isLight = body.classList.contains("light");
    toggle.textContent = isLight ? "🌞" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });