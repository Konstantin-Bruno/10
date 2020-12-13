import itemsTemplate from './templates/gallery-items.hbs';
import menu from './menu.json';

const markup = itemsTemplate(menu);
const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let body = document.querySelector('body');
let themeSwitch = document.querySelector('.theme-switch__toggle');

if (localStorage.getItem('Theme') === Theme.DARK) {
  body.setAttribute('class', Theme.DARK);
  themeSwitch.checked = true;
} else {
  body.setAttribute('class', Theme.LIGHT);
}

themeSwitch.addEventListener('click', switchClick);

function switchClick() {
  const check = themeSwitch.checked;

  if (check) {
    body.setAttribute('class', Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    body.setAttribute('class', Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
