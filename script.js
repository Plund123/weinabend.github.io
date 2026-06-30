const screens = {
  landing: document.querySelector('#landing'),
  confirm: document.querySelector('#confirm'),
  profile: document.querySelector('#profile'),
  swipedThrough: document.querySelector('#swiped-through'),
  result: document.querySelector('#result'),
  adminInvite: document.querySelector('#admin-invite'),
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
    id: 'vogelsang-riesling',
    isCorrect: false,
    match: '92% Match',
    title: 'Vogelsang, 24',
    label: 'Vogelsang\nRiesling',
    image: 'assets/profiles/vogelsang-riesling.png',
    photoPosition: 'center 44%',
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
  {
    id: 'grainhuebel-grande-dame',
    isCorrect: false,
    match: '96% Match',
    title: 'Grainhübel Grande Dame, 2021',
    label: 'Siben\nGG',
    image: 'assets/profiles/grainhuebel.png',
    photoPosition: 'center 42%',
    ariaLabel: 'Grainhübel Grande Dame Profilbild: elegante Dame mit Siben Grainhübel Rieslingflasche in warmer Weinbar',
    verified: '✓ VDP-Adlerin',
    bio: 'Ich bin trocken, bio und komme aus Deidesheim. Meine Säure ist mittel, meine Ansprüche sind Großes Gewächs und ich erkläre dir Mineralität nur, wenn du wirklich fragst.',
    tags: ['🍋 Riesling', '🦅 VDP GG', '🌿 Bio', '🏅 93 Falstaff', '💅 Deidesheim'],
    details: {
      Herkunft: 'Grainhübel Deidesheim, Pfalz',
      Stil: 'Riesling · trocken · 12,5 %',
      Beruf: 'Premium-Prinzessin mit Bodenhaftung',
      Sucht: 'Austern, Käse und Applaus beim ersten Schluck',
      'Red Flag': 'Nennt Alltagswein konsequent „Probephase“',
      Motto: 'Mittlere Säure, maximale Grandezza.',
    },
    prompt: '„Ich bringe Struktur, Frische und einen VDP-Adler mit. Du nur zwei Gläser.“',
  },
  {
    id: 'nik-weis-kabinett',
    isCorrect: false,
    match: '94% Match',
    title: 'Nik Weis Kabinett, 2025',
    label: 'Mosel\nKabinett',
    image: 'assets/profiles/nik-weis-kabinett.png',
    photoPosition: 'center 42%',
    ariaLabel: 'Mosel Riesling Kabinett Profilbild mit Nik Weis Weinflasche',
    verified: '✓ Schiefer-Sweetie',
    bio: 'Ich komme von der Mosel, habe nur 8 % Alkohol und trotzdem mehr Spannung als die letzte Gruppenchat-Diskussion. Süß? Ja. Sauer? Auch. Emotional verfügbar? Nur bei 8 bis 10 Grad.',
    tags: ['🍏 grüner Apfel', '🌿 Kräuter-Crush', '🪨 Schieferwürze', '⚡ Säure-Süße-Drama', '🌶️ Curry-kompatibel'],
    details: {
      Herkunft: 'Weingut Nik Weis, Mosel',
      Stil: 'Riesling Kabinett · süß/edelsüß · 8 %',
      Rebsorte: 'Riesling mit Restzucker-Rizz',
      Sucht: 'Thai-Curry, Aperitif-Momente und Applaus für Balance',
      'Red Flag': 'Sagt „nur ein leichtes Glas“ und bleibt geschmacklich drei Stunden im Kopf',
      Motto: 'Ich bin kein Zuckerwasser. Ich bin Spannungsmanagement.',
    },
    prompt: '„Ich bringe Süße, Säure und Schiefer mit. Du bringst bitte Snacks mit Schärfe.“',
  },
  {
    id: 'illusion-blanc-de-noir',
    isCorrect: true,
    match: '99% Match',
    title: 'Illusion Blanc de Noir, 2022',
    label: 'Illusion\nVDP',
    image: 'assets/profiles/illusion-profil.png',
    photoPosition: 'center 42%',
    ariaLabel: 'Illusion Blanc de Noir 2022 Profilbild mit Meyer-Näkel Weinflasche',
    verified: '✓ Richtiger Wein',
    bio: 'Ich heiße Illusion, weil ich als Spätburgunder weiß auftrete und damit jedes Glas kurz in eine Identitätskrise stürze. Jahrgang 2022, Ahr im Herzen, Zitrus im Flirtmodus und mineralisch genug, um beim ersten Schluck seriös zu wirken.',
    tags: ['🥂 Undercover-Pinot', '🍐 Birne mit Attitüde', '🍎 Apfel-Alarm', '🍑 Pfirsich-Plot-Twist', '🍋 Zitrus-Zwinker'],
    details: {
      Herkunft: 'Weingut Meyer-Näkel, Ahr',
      Stil: 'Spätburgunder in Weißwein-Verkleidung',
      Rebsorte: 'Pinot Noir, aber inkognito',
      Sucht: 'Verwirrte Blicke und zweite Schlucke',
      'Red Flag': 'Sagt „Ich bin nicht kompliziert“ und ist Blanc de Noir',
      Motto: 'Rotweintraube außen, Weißwein-Drama innen.',
    },
    prompt: '„Keine Sorge, ich sehe nur harmlos aus. Aromatisch habe ich Nebenquests.“',
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
const profilePhotoImage = document.querySelector('#profile-photo-image');
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
const adminShowResultsButton = document.querySelector('#admin-show-results-button');
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

function updateEtikettNameSize() {
  const maxSize = 2.85;
  const minSize = 0.72;
  const horizontalPadding = 8;

  confirmName.style.setProperty('--etikett-name-size', `${maxSize}rem`);

  const availableWidth = confirmName.clientWidth - horizontalPadding;

  if (availableWidth <= 0 || confirmName.scrollWidth <= availableWidth) {
    return;
  }

  let low = minSize;
  let high = maxSize;

  for (let i = 0; i < 14; i += 1) {
    const mid = (low + high) / 2;
    confirmName.style.setProperty('--etikett-name-size', `${mid}rem`);

    if (confirmName.scrollWidth <= availableWidth) {
      low = mid;
    } else {
      high = mid;
    }
  }

  confirmName.style.setProperty('--etikett-name-size', `${low}rem`);
}

function setName(name) {
  currentName = name.trim();
  confirmName.textContent = currentName;
  updateEtikettNameSize();
  profileUser.textContent = currentName;
  localStorage.setItem('weinmatchName', currentName);
}

function setProfilePhoto(profile) {
  profilePhoto.style.backgroundImage = '';
  profilePhoto.style.removeProperty('--profile-photo-position');
  wineProfileCard.style.removeProperty('--profile-photo-ratio');
  profilePhoto.classList.remove('profile-photo--image');
  profilePhotoImage.removeAttribute('src');

  if (!profile.image) {
    return;
  }

  if (profile.photoPosition) {
    profilePhoto.style.setProperty('--profile-photo-position', profile.photoPosition);
  }

  const profileImage = new Image();
  profileImage.addEventListener('load', () => {
    if (wineProfiles[currentProfileIndex]?.image !== profile.image) {
      return;
    }

    profilePhoto.style.backgroundImage = `url("${profile.image}")`;
    wineProfileCard.style.setProperty('--profile-photo-ratio', `${(profileImage.naturalHeight / profileImage.naturalWidth) * 100}%`);
    profilePhotoImage.src = profile.image;
    profilePhoto.classList.add('profile-photo--image');
  });
  profileImage.src = profile.image;
}

function renderProfile() {
  const profile = wineProfiles[currentProfileIndex];
  setProfilePhoto(profile);
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
    showScreen('adminInvite');
    return;
  }

  showScreen('confirm');
  updateEtikettNameSize();
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
    swipeLeftToNextProfile('');
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

adminShowResultsButton.addEventListener('click', () => {
  syncAndRenderResults();
  showScreen('admin');
});

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
  updateEtikettNameSize();
  profileUser.textContent = currentName;
}

window.addEventListener('resize', updateEtikettNameSize);

if (document.fonts) {
  document.fonts.ready.then(updateEtikettNameSize);
}
