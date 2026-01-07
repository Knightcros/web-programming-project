let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  reset: true,
});

sr.reveal('.home-text', { delay: 200, origin: 'top' });
sr.reveal('.home-img', { delay: 400, origin: 'top' });
sr.reveal('.about, .cta, .resume, .contact, .footer', { delay: 200, origin: 'top' });

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleIcon.querySelector('.toggle-text').textContent = 'Dark Mode';
    toggleIcon.querySelector('i').classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleIcon.querySelector('.toggle-text').textContent = 'Light Mode';
    toggleIcon.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'light');
  }
}

// Load theme from localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') toggleSwitch.checked = true;
}
