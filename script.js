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
    image: "images/image-placeholder.png",
    technologies: ["html", "Ruby on rails", "css", "Github"],
    liveVersion: "live.link",
    source: "source.link",
  }
  ,
  {
    name: "Multi-Post Stories2",
    description: "2A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: "images/image-placeholder.png",
    technologies: ["html", "Ruby on rails", "css", "Github"],
    liveVersion: "live.link",
    source: "source.link",
  }
  ,
  {
    name: "Multi-Post Stories3",
    description: "3A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: "images/image-placeholder.png",
    technologies: ["html", "Ruby on rails", "css", "Github"],
    liveVersion: "live.link",
    source: "source.link",
  }
  ,
  {
    name: "Multi-Post Stories4",
    description: "4A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: "images/image-placeholder.png",
    technologies: ["html", "Ruby on rails", "css", "Github"],
    liveVersion: "live.link",
    source: "source.link",
  }
];

  var selectedProject = {
    name: "Title",
    description: "Project description",
    image: "Image url",
    technologies: ["first"],
    liveVersion: "live url",
    source: "source url"
  }