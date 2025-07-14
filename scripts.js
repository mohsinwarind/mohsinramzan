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
  const icon = toggle.querySelector(".toggle-icon");
  const body = document.body;

  // Load theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light");
    icon.textContent = "🌞";
    toggleGitHubTheme("light")
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("light");
    const isLight = body.classList.contains("light");
    icon.classList.add("flip");
    toggleGitHubTheme(isLight ? "light" : "dark");
    // Swap icon
    icon.textContent = isLight ? "🌞" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
    
    setTimeout(() => icon.classList.remove("flip"), 300);
  });

  const counters = document.querySelectorAll('.count');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / 100);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  function toggleGitHubTheme(theme) {
    document.getElementById("github-stats-img").src = `https://github-readme-stats.vercel.app/api?username=mohsinwarind&show_icons=true&theme=${theme}`;
  }