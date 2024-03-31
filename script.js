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

// Dark Mode Button
// const darkModeButton = document.querySelector("#dark-mode");

// darkModeButton.addEventListener("click", () => { 
//   const body = document.querySelector(".main-body")
//   body.style.backgroundColor = "#000";
//   body.style.color = "#fff";
// });

// Projects
const projects = [
  {
    title: "Hospital Management System",
    description: "<b>Tech Stack</b><br><p><li>Python</li><li>React</li><li>MySQL</li>An Ecosystem for hospital that enables strategical decision making driven by AI and technique of OCR that enables hospitals to go paper free.<br><b>Strenghts</b><li>The HIMS is able to reduce the paper consumption by 80% within the hospitals.</li><li>The ecosystem is also efficient for small scale clinics and can be customised as per the requirements. Upto 70% effective.</li><li>Data of Hospitals, Lab Reports, Patients, Prescription can be synchorinzed in real time.</li><li>The Management system can be implemented for all the government hospitals around the country.</li>",
    imgUrl: "./assets/hims.png",
    gitHubLink: "",
    liveDemoLink: "https://youtu.be/IcyXhMlRoFU",
    btnContent:"Under Development",
    tab: "first",
  },
  {
    title: "Kerala Lottery  App",
    description: "<b>Tech Stack</b><li>Java | XML</li><li>Firebase</li><br>The Kerala Lottery App is an Android application delivered to the client, that is, a lottery firm.",
    imgUrl: "./assets/kla.png",
    gitHubLink: "https://github.com/aryanDevAK/Kerala_Lottery_App.git",
    liveDemoLink: "https://youtu.be/PYg21TJ9uyo",
    btnContent:"View Demo" ,
    tab: "second",
  },
  {
    title: "Graphics & UI/UX Designs",
    description: "<b>Tools I Use</b><br><li>Adobe Illustrator</li><li>Adobe Photoshop</li><li>Adobe Xd</li><br><p>I have an experience of 2 years in UI/UX Designing and Graphic Designing.<br>If you want to see the samples of my design you can refer below links.</p>",
    imgUrl: "./assets/uiux.png",
    gitHubLink: "https://drive.google.com/drive/folders/12YGa7pa6ZZ3iMQliNksOuDLY9z4cNGHj?usp=drive_link",
    liveDemoLink: "https://odop-sih-fusionforce.netlify.app/main",
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
        <img src="${project.imgUrl}" alt="Project Image" class="scroll-image">
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

// Scrolling Project image
const image = document.querySelector(".scroll-image");

      image.addEventListener("mouseenter", () => {
        image.style.animationPlayState = "running";
      });

      image.addEventListener("mouseleave", () => {
        image.style.animationPlayState = "paused";
      });