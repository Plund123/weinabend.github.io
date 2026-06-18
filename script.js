const screens = {
  landing: document.querySelector('#landing'),
  confirm: document.querySelector('#confirm'),
  profile: document.querySelector('#profile'),
  result: document.querySelector('#result'),
};

const wineProfiles = [
  {
    id: 'chaos-merlot',
    isCorrect: false,
    match: '71% Match',
    title: 'Merlot, 7 Jahre',
    label: 'Château Chaos',
    ariaLabel: 'Rotweinflasche Château Chaos mit dramatischem Dating-Profil-Hintergrund',
    verified: '✓ Korkifiziert',
    bio: 'Ich bin vollmundig, leicht dramatisch und suche jemanden, der mich erst atmen lässt und dann trotzdem zu schnell austrinkt.',
    tags: ['🍒 fruchtig', '🔥 samtig', '🎭 komplex', '💬 redet nach 2 Gläsern'],
    details: {
      Job: 'Trauben-Therapeut',
      Wohnort: 'Barrique mit Balkon',
      Sucht: 'Käseplatte mit emotionaler Reife',
      'Red Flag': 'Wird bei Schraubverschluss sensibel',
    },
    prompt: '„Hey, riechst du auch Vanille oder ist das nur unsere Chemie?“',
  },
  {
    id: 'riesling-rebell',
    isCorrect: false,
    match: '84% Match',
    title: 'Riesling Rebell, 4 Jahre',
    label: 'Riesling\nRebell',
    ariaLabel: 'Rieslingflasche mit funkelndem Dating-Profil-Hintergrund',
    verified: '✓ Steillagen-Star',
    bio: 'Ich wirke erst trocken, bringe dann aber überraschend viel Frische, Zitrus und Diskussionen über Mineralität mit.',
    tags: ['🍋 zitrisch', '⛰️ mineralisch', '⚡ wach', '🎧 hört nur Vinyl'],
    details: {
      Job: 'Säure-Architekt',
      Wohnort: 'Schiefer-Loft',
      Sucht: 'Thai-Curry und lange Sommerabende',
      'Red Flag': 'Korrigiert die Trinktemperatur',
    },
    prompt: '„Wenn du spontan bist, bringe ich die perfekte Säure-Balance mit.“',
  },
  {
    id: 'pinot-prinzessin',
    isCorrect: false,
    match: '63% Match',
    title: 'Pinot Prinzessin, 6 Jahre',
    label: 'Pinot\nPrinzessin',
    ariaLabel: 'Pinot-Noir-Flasche mit elegantem Dating-Profil-Hintergrund',
    verified: '✓ Samt geprüft',
    bio: 'Ich bin elegant, launisch und verschwinde auf Partys gern mit der besten Pilz-Pasta in eine ruhige Ecke.',
    tags: ['🍓 fein', '🌲 erdig', '🕯️ elegant', '📚 liest Etiketten'],
    details: {
      Job: 'Aromenschichten-Model',
      Wohnort: 'Kühler Kellerflügel',
      Sucht: 'Pilzrisotto mit Kerzenschein',
      'Red Flag': 'Braucht sehr viel Aufmerksamkeit im Glas',
    },
    prompt: '„Ich bin nicht kompliziert, ich bin nuanciert.“',
  },
  {
    id: 'rose-romantik',
    isCorrect: false,
    match: '58% Match',
    title: 'Rosé Romantik, 2 Jahre',
    label: 'Rosé\nRomantik',
    ariaLabel: 'Roséflasche mit sommerlichem Dating-Profil-Hintergrund',
    verified: '✓ Picknickbereit',
    bio: 'Ich bin unkompliziert, sonnenhungrig und der Meinung, dass jede Terrasse ein bisschen Provence verdient.',
    tags: ['🍉 frisch', '☀️ sonnig', '🧺 Picknick', '🕶️ Aperitif-Profi'],
    details: {
      Job: 'Terrassen-Influencer',
      Wohnort: 'Kühlbox am See',
      Sucht: 'Salate, Snacks und Sonnenuntergang',
      'Red Flag': 'Kommt selten allein zur Gartenparty',
    },
    prompt: '„Lass uns nichts überdenken und einfach kaltstellen.“',
  },
  {
    id: 'spatburgunder-sieger',
    isCorrect: true,
    match: '99% Match',
    title: 'Spätburgunder Sieger, 5 Jahre',
    label: 'Sieger\nWein',
    ariaLabel: 'Richtige Spätburgunderflasche mit goldenem Dating-Profil-Hintergrund',
    verified: '✓ Richtiger Wein',
    bio: 'Ich bin der gesuchte Wein des Abends: charmant, ausgewogen und genau die richtige Wahl, wenn dein Herz sicher zuschlägt.',
    tags: ['🏆 korrekt', '🍒 elegant', '✨ ausgewogen', '❤️ Herztreffer'],
    details: {
      Job: 'Finalisten-Favorit',
      Wohnort: 'Gewinnerglas',
      Sucht: 'Aufmerksame Verkoster:innen',
      'Red Flag': 'Macht alle falschen Matches neidisch',
    },
    prompt: '„Drück aufs Herz, wenn du dir wirklich sicher bist.“',
  },
];

const form = document.querySelector('#name-form');
const usernameInput = document.querySelector('#username');
const confirmName = document.querySelector('#confirm-name');
const profileUser = document.querySelector('#profile-user');
const editButton = document.querySelector('#edit-name');
const confirmButton = document.querySelector('#confirm-name-button');
const actionMessage = document.querySelector('#action-message');
const wineProfileCard = document.querySelector('.wine-profile');
const profilePhoto = document.querySelector('#profile-photo');
const bottleLabel = document.querySelector('#bottle-label');
const matchLabel = document.querySelector('#match-label');
const profileTitle = document.querySelector('#profile-title');
const verified = document.querySelector('#verified');
const bio = document.querySelector('#bio');
const tagList = document.querySelector('#tag-list');
const infoGrid = document.querySelector('#info-grid');
const promptText = document.querySelector('#prompt-text');
const progressText = document.querySelector('#profile-progress');
const resultEyebrow = document.querySelector('#result-eyebrow');
const resultTitle = document.querySelector('#result-title');
const resultCopy = document.querySelector('#result-copy');
const winnersList = document.querySelector('#winners-list');
const restartButton = document.querySelector('#restart-button');
const resetWinnersButton = document.querySelector('#reset-winners-button');

let currentName = localStorage.getItem('weinmatchName') || '';
let currentProfileIndex = 0;
let gameOver = false;
let isSwiping = false;

function getWinners() {
  return JSON.parse(localStorage.getItem('weinmatchWinners') || '[]');
}

function saveWinner(name) {
  const winners = getWinners();
  if (!winners.includes(name)) {
    winners.push(name);
    localStorage.setItem('weinmatchWinners', JSON.stringify(winners));
  }
}

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

function renderProfile() {
  const profile = wineProfiles[currentProfileIndex];
  profilePhoto.setAttribute('aria-label', profile.ariaLabel);
  bottleLabel.innerHTML = profile.label.replace('\n', '<br />');
  matchLabel.textContent = `${profile.match} mit `;
  matchLabel.append(profileUser);
  profileTitle.textContent = profile.title;
  verified.textContent = profile.verified;
  bio.textContent = profile.bio;
  tagList.innerHTML = profile.tags.map((tag) => `<span>${tag}</span>`).join('');
  infoGrid.innerHTML = Object.entries(profile.details)
    .map(([label, value]) => `<div><strong>${label}</strong><span>${value}</span></div>`)
    .join('');
  promptText.textContent = profile.prompt;
  progressText.textContent = `Profil ${currentProfileIndex + 1} von ${wineProfiles.length}`;
  actionMessage.textContent = '';
}

function renderWinners() {
  const winners = getWinners();
  winnersList.replaceChildren();

  const namesToRender = winners.length
    ? winners
    : ['Noch niemand hat den richtigen Wein gewählt.'];

  namesToRender.forEach((winner) => {
    const item = document.createElement('li');
    item.textContent = winner;
    winnersList.append(item);
  });
}

function endGame(won) {
  gameOver = true;

  if (won) {
    saveWinner(currentName);
    resultEyebrow.textContent = 'Korrekt verkostet';
    resultTitle.textContent = 'Du hast den richtigen Wein gefunden!';
    resultCopy.textContent = 'Dein Name wurde in die Liste der erfolgreichen WeinMatcher aufgenommen.';
  } else {
    resultEyebrow.textContent = 'Leider entkorkt';
    resultTitle.textContent = 'Verloren!';
    resultCopy.textContent = 'Das Herz schlug für den falschen Wein. Das Spiel ist damit beendet.';
  }

  renderWinners();
  showScreen('result');
}

function moveToNextProfile(message) {
  if (currentProfileIndex < wineProfiles.length - 1) {
    currentProfileIndex += 1;
    renderProfile();
    actionMessage.textContent = message;
    return true;
  }

  actionMessage.textContent = 'Das war das letzte Profil. Jetzt zählt nur noch das Herz.';
  return false;
}

function swipeLeftToNextProfile(message) {
  if (isSwiping) {
    return;
  }

  if (currentProfileIndex >= wineProfiles.length - 1) {
    moveToNextProfile(message);
    return;
  }

  isSwiping = true;
  wineProfileCard.classList.add('wine-profile--swipe-left');

  window.setTimeout(() => {
    moveToNextProfile(message);
    wineProfileCard.classList.remove('wine-profile--swipe-left');
    isSwiping = false;
  }, 360);
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
  currentProfileIndex = 0;
  gameOver = false;
  renderProfile();
  showScreen('profile');
});

document.querySelector('#nope-button').addEventListener('click', () => {
  if (!gameOver) {
    swipeLeftToNextProfile('Weitergewischt. Vielleicht wartet der richtige Wein im nächsten Profil.');
  }
});

document.querySelector('#toast-button').addEventListener('click', () => {
  if (!gameOver) {
    endGame(wineProfiles[currentProfileIndex].isCorrect);
  }
});

document.querySelector('#like-button').addEventListener('click', () => {
  if (!gameOver) {
    endGame(wineProfiles[currentProfileIndex].isCorrect);
  }
});

restartButton.addEventListener('click', () => {
  currentProfileIndex = 0;
  gameOver = false;
  renderProfile();
  showScreen('profile');
});

resetWinnersButton.addEventListener('click', () => {
  localStorage.removeItem('weinmatchWinners');
  renderWinners();
});

if (currentName) {
  usernameInput.value = currentName;
  confirmName.textContent = currentName;
  profileUser.textContent = currentName;
}
