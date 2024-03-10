function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

const texts = ["Ecosystems & Systems Engineer", "Software Engineer", "Android Developer", "UI/UX Designer"];
let index = 0;
let text = "";
let isTyping = true;

function type() {
  text = texts[index].substring(0, text.length + 1);
  document.getElementById("changingText").textContent = text;

  if (text === texts[index]) {
    isTyping = false;
    setTimeout(erase, 2000); // Wait 2 seconds before erasing the text
  } else {
    setTimeout(type, 200); // Typing speed: 200 milliseconds
  }
}

function erase() {
  text = texts[index].substring(0, text.length - 1);
  document.getElementById("changingText").textContent = text;

  if (text === "") {
    isTyping = true;
    index = (index + 1) % texts.length; // Cycle through the array of texts
    setTimeout(type, 500); // Wait 0.5 seconds before typing the next text
  } else {
    setTimeout(erase, 100); // Erasing speed: 100 milliseconds
  }
}

// Start the typing animation
type();
