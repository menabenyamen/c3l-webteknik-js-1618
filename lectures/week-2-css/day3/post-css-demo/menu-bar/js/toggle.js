const toggleMobileMenu  = () => {
  document.querySelector('.nav-list').classList.toggle('nav-open');
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.nav-menu').addEventListener('click', toggleMobileMenu);
});

