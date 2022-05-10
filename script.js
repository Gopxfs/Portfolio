// A function that opens and closes the mobile menu
function toggleMenu() {
  const menu = document.getElementById('header-flex');
  menu.classList.toggle('active');
}

// Creating the variables to apply the toggleMenu function to
const headerButton = document.getElementById('header-button');
const menuOptions = document.getElementsByClassName('mobile-menu-options');

// When clicked, the elements are going to execute the toggleMenu function
headerButton.addEventListener('click', toggleMenu);
for (let i = 0; i < menuOptions.length; i += 1) {
  menuOptions[i].addEventListener('click', toggleMenu);
}

// Creating the projects properties inside an array
const projects = [
  {
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: "images/project-images/image-placeholder3.jpg",
    technologies: ["html", "Ruby on rails", "css", "Github"],
    liveVersion: "live.link",
    source: "source.link",
  }
  ,
  {
    name: "Multi-Post Stories2",
    description: "2A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: "images/project-images/image-placeholder4.jpg",
    technologies: ["html", "Ruby on rails", "css", "Github"],
    liveVersion: "live.link",
    source: "source.link",
  }
  ,
  {
    name: "Multi-Post Stories3",
    description: "3A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: "images/project-images/image-placeholder3.jpg",
    technologies: ["html", "Ruby on rails", "css", "Github"],
    liveVersion: "live.link",
    source: "source.link",
  }
  ,
  {
    name: "Multi-Post Stories4",
    description: "4A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: "images/project-images/image-placeholder4.jpg",
    technologies: ["html", "Ruby on rails", "css", "Github"],
    liveVersion: "live.link",
    source: "source.link",
  }
];

  function togglePopupWindow() {
  const popupWindow = document.getElementById('popup-project');
  popupWindow.classList.toggle('active');
  }

  function selectProject(projectNumber) {
    document.getElementById('popup-title').innerHTML = projects[projectNumber].name;
    document.getElementById('popup-description').innerHTML = projects[projectNumber].description;
    document.getElementById('popup-image').src = projects[projectNumber].image;
    document.getElementById('live-link').href = projects[projectNumber].liveVersion;
    document.getElementById('source-link').href = projects[projectNumber].source;
  }

  const toggleProjectWindow = document.getElementsByClassName('popup-project-window');
  for (let i = 0; i < toggleProjectWindow.length; i += 1) {
    toggleProjectWindow[i].addEventListener('click', togglePopupWindow);
  }

  const project1 = document.getElementById('project-button1');
  const project2 = document.getElementById('project-button2');
  const project3 = document.getElementById('project-button3');
  const project4 = document.getElementById('project-button4');
  project1.addEventListener('click', function() {selectProject(0)});
  project2.addEventListener('click', function() {selectProject(1)});
  project3.addEventListener('click', function() {selectProject(2)});
  project4.addEventListener('click', function() {selectProject(3)});