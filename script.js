const screens = {
  landing: document.querySelector('#landing'),
  confirm: document.querySelector('#confirm'),
  profile: document.querySelector('#profile'),
  swipedThrough: document.querySelector('#swiped-through'),
  result: document.querySelector('#result'),
  admin: document.querySelector('#admin'),
};

const wineProfiles = [
  {
    id: 'chaos-merlot',
    isCorrect: false,
    match: '71% Match',
    title: 'Merlot, 7 Jahre',
    label: 'Château Chaos',
    image: 'assets/profiles/chaos-merlot.png',
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
    image: 'assets/profiles/riesling-rebell.png',
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
    image: 'assets/profiles/pinot-prinzessin.png',
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
    image: 'assets/profiles/rose-romantik.png',
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
    image: 'assets/profiles/spatburgunder-sieger.png',
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
  {
    id: 'vogelsang-riesling',
    isCorrect: false,
    match: '92% Match',
    title: 'Vogelsang, 24',
    label: 'Vogelsang\nRiesling',
    image: 'assets/profiles/vogelsang-riesling.png',
    ariaLabel: 'Vogelsang-Profilbild: Person mit Rieslingflasche in einem Mosel-Weinberg bei Sonnenuntergang',
    verified: '● Jetzt aktiv',
    bio: 'Ich komme aus einer guten Apotheke. Steile Lagen, harter Schiefer, ehrliche Arbeit. Ich bin kein Mainstream. Sondern Steillage. Mag Fisch, gute Gespräche und Sonnenuntergänge.',
    tags: ['🍷 Weinabende', '⛰️ Wandern', '✈️ Spontan reisen', '🎵 Gute Musik', '🍴 Feines Essen'],
    details: {
      Standort: 'Trittenheimer Apotheke, Mosel',
      Stil: 'Riesling · trocken · mineralisch',
      Beruf: 'Charakterdarsteller',
      Suche: 'Tiefe Gespräche & langfristige Verbindung',
      Song: 'Rivers and Roads · The Head and the Heart',
      Motto: 'Zeit macht Wein. Und die besten Dinge brauchen Geduld.',
    },
    prompt: '„Wenn du Schiefer, Sonnenuntergänge und ehrliche Gespräche magst, sollten wir anstoßen.“',
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
const losersList = document.querySelector('#losers-list');
const adminWinnersList = document.querySelector('#admin-winners-list');
const adminLosersList = document.querySelector('#admin-losers-list');
const adminRefreshButton = document.querySelector('#admin-refresh-button');
const adminResetResultsButton = document.querySelector('#admin-reset-results-button');
const swipedThroughCloseButton = document.querySelector('#swiped-through-close');

const WINNERS_STORAGE_KEY = 'weinmatchWinners';
const LOSERS_STORAGE_KEY = 'weinmatchLosers';
const remoteWinnersConfig = window.WEINMATCH_CONFIG?.remoteWinners || {};
const remoteBaseUrl = remoteWinnersConfig.databaseUrl ? remoteWinnersConfig.databaseUrl.replace(/\/$/, '') : '';
const remoteWinnersUrl = remoteBaseUrl
  ? `${remoteBaseUrl}/${remoteWinnersConfig.winnersPath || remoteWinnersConfig.path || 'winners'}.json`
  : '';
const remoteLosersUrl = remoteBaseUrl
  ? `${remoteBaseUrl}/${remoteWinnersConfig.losersPath || 'losers'}.json`
  : '';
const winnersSyncIntervalMs = remoteWinnersConfig.syncIntervalMs || 5000;
let winnersSyncTimer;

let currentName = localStorage.getItem('weinmatchName') || '';
let currentProfileIndex = 0;
let gameOver = false;
let isSwiping = false;

function getLocalNames(storageKey) {
  return JSON.parse(localStorage.getItem(storageKey) || '[]');
}

function saveLocalNames(storageKey, names) {
  localStorage.setItem(storageKey, JSON.stringify(names));
}

function normalizeNames(names) {
  return [...new Set((names || []).map((name) => name.trim()).filter(Boolean))];
}

function readRemoteNames(remoteUrl, storageKey) {
  if (!remoteUrl) {
    return Promise.resolve(getLocalNames(storageKey));
  }

  return fetch(remoteUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Remote results could not be loaded.');
      }
      return response.json();
    })
    .then((names) => {
      if (Array.isArray(names)) {
        return normalizeNames(names);
      }

      return normalizeNames(Object.keys(names || {}));
    })
    .catch(() => getLocalNames(storageKey));
}

function saveResultName(name, remoteUrl, storageKey) {
  const normalizedName = name.trim();
  const localNames = normalizeNames([...getLocalNames(storageKey), normalizedName]);
  saveLocalNames(storageKey, localNames);

  if (!remoteUrl || !normalizedName) {
    return Promise.resolve(localNames);
  }

  return fetch(`${remoteUrl.replace(/\.json$/, '')}/${encodeURIComponent(normalizedName)}.json`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(true),
  })
    .then(() => readRemoteNames(remoteUrl, storageKey))
    .then((names) => {
      saveLocalNames(storageKey, names);
      return names;
    })
    .catch(() => localNames);
}

function getLocalWinners() {
  return getLocalNames(WINNERS_STORAGE_KEY);
}

function getLocalLosers() {
  return getLocalNames(LOSERS_STORAGE_KEY);
}

function getRemoteWinners() {
  return readRemoteNames(remoteWinnersUrl, WINNERS_STORAGE_KEY);
}

function getRemoteLosers() {
  return readRemoteNames(remoteLosersUrl, LOSERS_STORAGE_KEY);
}

function saveWinner(name) {
  return saveResultName(name, remoteWinnersUrl, WINNERS_STORAGE_KEY);
}

function saveLoser(name) {
  return saveResultName(name, remoteLosersUrl, LOSERS_STORAGE_KEY);
}

function resetResults() {
  localStorage.removeItem(WINNERS_STORAGE_KEY);
  localStorage.removeItem(LOSERS_STORAGE_KEY);

  return Promise.all([
    remoteWinnersUrl ? fetch(remoteWinnersUrl, { method: 'DELETE' }).catch(() => undefined) : Promise.resolve(),
    remoteLosersUrl ? fetch(remoteLosersUrl, { method: 'DELETE' }).catch(() => undefined) : Promise.resolve(),
  ]).then(() => ({ winners: [], losers: [] }));
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

function setProfilePhoto(profile) {
  profilePhoto.style.backgroundImage = '';
  profilePhoto.classList.remove('profile-photo--image');

  if (!profile.image) {
    return;
  }

  const profileImage = new Image();
  profileImage.addEventListener('load', () => {
    if (wineProfiles[currentProfileIndex]?.image !== profile.image) {
      return;
    }

    profilePhoto.style.backgroundImage = `url("${profile.image}")`;
    profilePhoto.classList.add('profile-photo--image');
  });
  profileImage.src = profile.image;
}

function renderProfile() {
  const profile = wineProfiles[currentProfileIndex];
  profilePhoto.style.backgroundImage = profile.image ? `url("${profile.image}")` : '';
  profilePhoto.setAttribute('aria-label', profile.ariaLabel);
  profilePhoto.classList.toggle('profile-photo--image', Boolean(profile.image));
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

function renderNameList(listElement, names, emptyText) {
  if (!listElement) {
    return;
  }

  listElement.replaceChildren();

  const namesToRender = names.length ? names : [emptyText];
  namesToRender.forEach((name) => {
    const item = document.createElement('li');
    item.textContent = name;
    listElement.append(item);
  });
}

function renderResults({ winners = getLocalWinners(), losers = getLocalLosers() } = {}) {
  const normalizedWinners = normalizeNames(winners);
  const normalizedLosers = normalizeNames(losers);
  saveLocalNames(WINNERS_STORAGE_KEY, normalizedWinners);
  saveLocalNames(LOSERS_STORAGE_KEY, normalizedLosers);

  renderNameList(winnersList, normalizedWinners, 'Noch niemand hat den richtigen Wein gewählt.');
  renderNameList(adminWinnersList, normalizedWinners, 'Noch keine Gewinner:innen.');
  renderNameList(losersList, normalizedLosers, 'Noch niemand hat verloren.');
  renderNameList(adminLosersList, normalizedLosers, 'Noch keine Verlierer:innen.');
}

function syncAndRenderResults() {
  return Promise.all([getRemoteWinners(), getRemoteLosers()]).then(([winners, losers]) => renderResults({ winners, losers }));
}

function startWinnersSync() {
  if (!remoteWinnersUrl || winnersSyncTimer) {
    return;
  }

  winnersSyncTimer = window.setInterval(syncAndRenderResults, winnersSyncIntervalMs);
}

function endGame(won) {
  gameOver = true;

  if (won) {
    saveWinner(currentName).then((winners) => renderResults({ winners }));
    resultEyebrow.textContent = 'Korrekt verkostet';
    resultTitle.textContent = 'Du hast den richtigen Wein gefunden!';
    resultCopy.textContent = 'Dein Name wurde in die Liste der erfolgreichen WeinMatcher aufgenommen.';
  } else {
    saveLoser(currentName).then((losers) => renderResults({ losers }));
    resultEyebrow.textContent = 'Leider entkorkt';
    resultTitle.textContent = 'Verloren!';
    resultCopy.textContent = 'Das Herz schlug für den falschen Wein. Das Spiel ist damit beendet.';
  }

  syncAndRenderResults();
  startWinnersSync();
  showScreen('result');
}

function restartAfterAllProfilesRejected() {
  showScreen('swipedThrough');
}

function closeSwipedThroughPage() {
  currentProfileIndex = 0;
  renderProfile();
  showScreen('profile');
}

function moveToNextProfile(message) {
  if (currentProfileIndex < wineProfiles.length - 1) {
    currentProfileIndex += 1;
    renderProfile();
    actionMessage.textContent = message;
    return true;
  }

  restartAfterAllProfilesRejected();
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

  if (name.toLowerCase() === 'admin') {
    syncAndRenderResults();
    startWinnersSync();
    showScreen('admin');
    return;
  }

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

swipedThroughCloseButton.addEventListener('click', closeSwipedThroughPage);

adminRefreshButton.addEventListener('click', syncAndRenderResults);

adminResetResultsButton.addEventListener('click', () => {
  resetResults().then(renderResults);
});

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    syncAndRenderResults();
  }
});

if (currentName) {
  usernameInput.value = currentName;
  confirmName.textContent = currentName;
  profileUser.textContent = currentName;
}
