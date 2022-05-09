const headerButton = document.getElementById('header-button');

function toggleMenu() {
  const menu = document.getElementById('header-flex');
  menu.classList.toggle('active');
}

headerButton.addEventListener('click', toggleMenu);