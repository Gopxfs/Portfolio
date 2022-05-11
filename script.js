// Function to open and close the mobile menu
function toggleMenu() {
  const menu = document.getElementById('header-flex');
  menu.classList.toggle('active');
}

// Execute the toggleMenu function in these variables
const headerButton = document.getElementById('header-button');
const menuOptions = document.getElementsByClassName('mobile-menu-options');
headerButton.addEventListener('click', toggleMenu);
for (let i = 0; i < menuOptions.length; i += 1) {
  menuOptions[i].addEventListener('click', toggleMenu);
}

// Projects properties (inside an array)
const projects = [
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    mobileDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    image: 'images/project-images/image-placeholder3.jpg',
    technologies: ['html', 'Ruby on rails', 'css', 'Github'],
    liveVersion: 'live.link',
    source: 'source.link',
  },
  {
    name: 'Multi-Post Stories2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    mobileDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    image: 'images/project-images/image-placeholder4.jpg',
    technologies: ['html', 'Ruby on rails', 'css', 'Github'],
    liveVersion: 'live.link',
    source: 'source.link',
  },
  {
    name: 'Multi-Post Stories3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    mobileDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    image: 'images/project-images/image-placeholder3.jpg',
    technologies: ['html', 'Ruby on rails', 'css', 'Github'],
    liveVersion: 'live.link',
    source: 'source.link',
  },
  {
    name: 'Multi-Post Stories4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    mobileDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    image: 'images/project-images/image-placeholder4.jpg',
    technologies: ['html', 'Ruby on rails', 'css', 'Github'],
    liveVersion: 'live.link',
    source: 'source.link',
  }
];
// Function to change the popup project properties based on which button was clicked
function selectProject(projectNumber) {
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  if (!mediaQuery.matches) {
    document.getElementById('popup-description').innerHTML = projects[projectNumber].mobileDescription;
}
  else {
    document.getElementById('popup-description').innerHTML = projects[projectNumber].description;
}
  document.getElementById('popup-title').innerHTML = projects[projectNumber].name;
  document.getElementById('popup-image').src = projects[projectNumber].image;
  document.getElementById('live-link').href = projects[projectNumber].liveVersion;
  document.getElementById('source-link').href = projects[projectNumber].source;
  let technologiesList = document.getElementById('popup-technologies');
  let listItem;
  technologiesList.innerHTML = '';
  for (let i = 0; i < projects[projectNumber].technologies.length; i += 1) {
    listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(projects[projectNumber].technologies[i]));
    technologiesList.appendChild(listItem);
  }
}
// Execute the selectProject function in these variables
  const project1 = document.getElementById('project-button1');
  const project2 = document.getElementById('project-button2');
  const project3 = document.getElementById('project-button3');
  const project4 = document.getElementById('project-button4');
  project1.addEventListener('click', function() {selectProject(0)});
  project2.addEventListener('click', function() {selectProject(1)});
  project3.addEventListener('click', function() {selectProject(2)});
  project4.addEventListener('click', function() {selectProject(3)});

// Function to open the pop up window
  function togglePopupWindow() {
  const popupWindow = document.getElementById('popup-project');
  const body = document.getElementsByTagName('BODY')[0];
  const pageFlex = document.getElementsByClassName('page-flex');
  popupWindow.classList.toggle('active');
  body.classList.toggle ('active');
  pageFlex[0].classList.toggle ('active');
}
// Execute the togglePopupWindow function in these variables
  const toggleProjectWindow = document.getElementsByClassName('popup-project-window');
  for (let i = 0; i < toggleProjectWindow.length; i += 1) {
    toggleProjectWindow[i].addEventListener('click', togglePopupWindow);
}
