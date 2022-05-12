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
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    shortestDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: 'images/project-images/image-placeholder3.jpg',
    technologies: ['html', 'Ruby on rails', 'css', 'Github'],
    liveVersion: 'live.link',
    source: 'source.link',
  },
  {
    name: 'Multi-Post Stories2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    shortestDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: 'images/project-images/image-placeholder4.jpg',
    technologies: ['html', 'Ruby on rails', 'css', 'Github'],
    liveVersion: 'live.link',
    source: 'source.link',
  },
  {
    name: 'Multi-Post Stories3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    shortestDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: 'images/project-images/image-placeholder3.jpg',
    technologies: ['html', 'Ruby on rails', 'css', 'Github'],
    liveVersion: 'live.link',
    source: 'source.link',
  },
  {
    name: 'Multi-Post Stories4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    shortestDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: 'images/project-images/image-placeholder4.jpg',
    technologies: ['html', 'Ruby on rails', 'css', 'Github'],
    liveVersion: 'live.link',
    source: 'source.link',
  },
];

const projectGrid = document.getElementById('project-grid');
// Iterate throught all the projects
for (let projectNumber = 0; projectNumber < projects.length; projectNumber += 1) {
  // Creating new HTML elements
  const projectCard = document.createElement('section');
  const projectImg = document.createElement('img');
  const projectInfo = document.createElement('div');
  const projectTitle = document.createElement('h3');
  const projectDescription = document.createElement('p');
  const projectTechnologies = document.createElement('ul');
  const projectButton = document.createElement('button');
  projectButton.type = 'button';

  // Giving classes to elements
  projectCard.classList.add('work-card');
  projectImg.classList.add('work-card-image-placeholder');
  projectInfo.classList.add('project-info');
  projectTitle.classList.add('work-card-project-title');
  projectDescription.classList.add('work-card-project-description');
  projectButton.classList.add('project-button', 'popup-project-window');

  // Appending elements
  projectGrid.appendChild(projectCard);
  projectCard.appendChild(projectImg);
  projectCard.appendChild(projectInfo);
  projectInfo.appendChild(projectTitle);
  projectInfo.appendChild(projectDescription);
  projectInfo.appendChild(projectTechnologies);
  projectInfo.appendChild(projectButton);

  if (projectNumber % 2 !== 0) {
    projectCard.classList.add('work-card-reverse');
    projectImg.classList.add('work-card-image-placeholder-reverse');
    projectInfo.classList.add('project-info-reverse');
  }

  // Adding technologies to the UL
  for (let i = 0; i < projects[projectNumber].technologies.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.classList.add('project-language');
    listItem.innerHTML = projects[projectNumber].technologies[i];
    projectTechnologies.appendChild(listItem);
  }

  // Filling the elements information
  projectImg.src = projects[projectNumber].image;
  projectImg.alt = `Project ${projectNumber} image`;
  projectTitle.innerHTML = projects[projectNumber].name;
  projectDescription.innerHTML = projects[projectNumber].shortestDescription;
  projectButton.innerHTML = 'See Project';
  projectButton.setAttribute('id', `project-button${projectNumber}`);
}

// Function to change the popup project properties based on which button was clicked
function selectProject(projectNumber) {
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  if (!mediaQuery.matches) {
    document.getElementById('popup-description').innerHTML = projects[projectNumber].shortDescription;
  } else {
    document.getElementById('popup-description').innerHTML = projects[projectNumber].description;
  }
  document.getElementById('popup-title').innerHTML = projects[projectNumber].name;
  document.getElementById('popup-image').src = projects[projectNumber].image;
  document.getElementById('live-link').href = projects[projectNumber].liveVersion;
  document.getElementById('source-link').href = projects[projectNumber].source;
  const technologiesList = document.getElementById('popup-technologies');
  let listItem;
  technologiesList.innerHTML = '';
  for (let i = 0; i < projects[projectNumber].technologies.length; i += 1) {
    listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(projects[projectNumber].technologies[i]));
    technologiesList.appendChild(listItem);
  }
}
// Execute the selectProject function in these variables
const project1 = document.getElementById('project-button0');
const project2 = document.getElementById('project-button1');
const project3 = document.getElementById('project-button2');
const project4 = document.getElementById('project-button3');
project1.addEventListener('click', () => { selectProject(0); });
project2.addEventListener('click', () => { selectProject(1); });
project3.addEventListener('click', () => { selectProject(2); });
project4.addEventListener('click', () => { selectProject(3); });

// Function to open the pop up window
function togglePopupWindow() {
  const popupWindow = document.getElementById('popup-project');
  const body = document.getElementsByTagName('BODY')[0];
  const pageFlex = document.getElementsByClassName('page-flex');
  popupWindow.classList.toggle('active');
  body.classList.toggle('active');
  pageFlex[0].classList.toggle('active');
}
// Execute the togglePopupWindow function in these variables
const toggleProjectWindow = document.getElementsByClassName('popup-project-window');
for (let i = 0; i < toggleProjectWindow.length; i += 1) {
  toggleProjectWindow[i].addEventListener('click', togglePopupWindow);
}

// Object to store the user data
const userData = {
  name: 'name',
  email: 'email',
  message: 'message',
}
// Check if the email is in lower case, if it isn't then dont submit the form
document.getElementById('contact-form').addEventListener('submit', (event) => {
  const name = document.getElementById('contact-me-name').value;
  const email = document.getElementById('contact-me-email').value;
  const message = document.getElementById('contact-me-message').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    document.getElementById('email-error').classList.add('active');
  } else { // If everything is ok, then store it on localStore
    userData.name = name;
    userData.email = email;
    userData.message = message;
    localStorage.setItem('userData', JSON.stringify(userData));
  }
});

// Check if there is something stored at localStore, if it is then put in the fields
const savedUserData = localStorage.getItem('userData');
JSON.parse(savedUserData);
// if (savedUserData.name !== userData)