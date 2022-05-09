// A function that opens and closes the mobile menu
function toggleMenu() {
  const menu = document.getElementById('header-flex');
  menu.classList.toggle('active');
}

// Creating the variables to apply the toggleMenu function to
const headerButton = document.getElementById('header-button');
const menuOptions = document.getElementsByClassName('menu-option');

// When clicked, the elements are going to execute the toggleMenu function
headerButton.addEventListener('click', toggleMenu);
for (let i = 0; i < menuOptions.length; i += 1) {
  menuOptions[i].addEventListener('click', toggleMenu);
}
