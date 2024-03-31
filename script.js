function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

const texts = ["Ecosystem Engineer", "Software Engineer", "Android Developer", "UI/UX Designer"];
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
type();

const darkModeButton = document.querySelector("#dark-mode");

darkModeButton.addEventListener("click", () => { 
  const body = document.querySelector(".main-body")
  body.style.backgroundColor = "#000";
  body.style.color = "#fff";
});

// Projects
const projects = [
  {
    title: "Hospital Management System",
    description: "<b>Tech Stack</b><br><li>Python</li><li>React</li><li>MySQL</li><br>An Ecosystem for hospital that enables strategical decision making driven by AI and technique of OCR that enables hospitals to go paper free.<br><b>Strenghts</b><li>The HIMS is able to reduce the paper consumption by 80% within the hospitals.</li><li>The ecosystem is also efficient for small scale clinics and can be customised as per the requirements. Upto 70% effective.</li><li>Data of Hospitals, Lab Reports, Patients, Prescription can be synchorinzed in real time.</li><li>The Management system can be implemented for all the government hospitals around the country.</li>",
    imgUrl: "./assets/project-1.png",
    gitHubLink: "",
    liveDemoLink: "Under Development",
    btnContent:"Under Development",
    tab: "first",
  },
  {
    title: "Kerala Lottery  App",
    description: "Description 2",
    imgUrl: "./assets/education.png",
    gitHubLink: "",
    liveDemoLink: "https://youtu.be/PYg21TJ9uyo",
    btnContent:"View Demo" ,
    tab: "second",
  },
  {
    title: "My Designs",
    description: "",
    imgUrl: "./assets/education.png",
    gitHubLink: "",
    liveDemoLink: "https://youtu.be/PYg21TJ9uyo",
    btnContent:"View Graphic Designs",
    tab: "third",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  showProjects("first");
});

function showProjects(tab) {
  const projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = "";

  const filteredProjects = projects.filter(
    (project) => project.tab === tab
  );

  filteredProjects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
    <div class="project-sub-container">
      <div class="project-image">
        <img src="${project.imgUrl}" alt="Project Image">
      </div>
      <div class="project-info">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="project-btns">
          <a href="${project.gitHubLink}"><button class="btn btn-color-2">Github &#128279;</button></a>
          <a href="${project.liveDemoLink}"><button class="btn btn-color-1" id="project-btn">${project.btnContent} &#128279;</button></a>
        </div>
      </div>
    </div>
`;
    projectContainer.appendChild(projectCard);
  });
}