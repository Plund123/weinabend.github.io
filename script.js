const screens = {
  landing: document.querySelector('#landing'),
  confirm: document.querySelector('#confirm'),
  profile: document.querySelector('#profile'),
};

const form = document.querySelector('#name-form');
const usernameInput = document.querySelector('#username');
const confirmName = document.querySelector('#confirm-name');
const profileUser = document.querySelector('#profile-user');
const editButton = document.querySelector('#edit-name');
const confirmButton = document.querySelector('#confirm-name-button');
const actionMessage = document.querySelector('#action-message');

let currentName = localStorage.getItem('weinmatchName') || '';

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => screen.classList.remove('screen--active'));
  screens[screenName].classList.add('screen--active');
}

function setName(name) {
  currentName = name.trim();
  confirmName.textContent = currentName;
  profileUser.textContent = currentName;
  localStorage.setItem('weinmatchName', currentName);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = usernameInput.value.trim();

  if (!name) {
    usernameInput.focus();
    return;
  }

  setName(name);
  showScreen('confirm');
});

editButton.addEventListener('click', () => {
  usernameInput.value = currentName;
  showScreen('landing');
  usernameInput.focus();
});

confirmButton.addEventListener('click', () => {
  showScreen('profile');
});

const messages = {
  'nope-button': 'Autsch. Dieser Wein schreibt jetzt traurige Gedichte im Dekanter.',
  'toast-button': `Prost, ${currentName || 'Weinfreund:in'}! Das ist quasi ein Glas-voll-Superlike.`,
  'like-button': 'Match! Bitte bring Käse, dieser Merlot bringt Gefühle.',
};

document.querySelectorAll('.swipe').forEach((button) => {
  button.addEventListener('click', () => {
    actionMessage.textContent = button.id === 'toast-button'
      ? `Prost, ${currentName || 'Weinfreund:in'}! Das ist quasi ein Glas-voll-Superlike.`
      : messages[button.id];
  });
});

if (currentName) {
  usernameInput.value = currentName;
  confirmName.textContent = currentName;
  profileUser.textContent = currentName;
}
