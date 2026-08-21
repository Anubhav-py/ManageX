const modalBackdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const blockBadge = document.getElementById('blockBadge');
const floorGrid = document.getElementById('floorGrid');
const blockOverview = document.getElementById('blockOverview');
const floorView = document.getElementById('floorView');
const floorTitle = document.getElementById('floorTitle');
const floorChip = document.getElementById('floorChip');
const backToFloors = document.getElementById('backToFloors');
const closeButton = document.getElementById('modalClose');
const campusMap = document.getElementById('campusMap');

const grievanceBackdrop = document.getElementById('grievanceBackdrop');
const grievanceClose = document.getElementById('grievanceClose');

let selectedBlock = '';
let lastFocused = null;
let grievanceLastFocused = null;
let zoomLevel = 1;

const floorOptions = [
  { id: 'G', label: 'Ground', code: 'G' },
  { id: '1', label: 'Floor 1', code: 'F1' },
  { id: '2', label: 'Floor 2', code: 'F2' },
  { id: '3', label: 'Floor 3', code: 'F3' },
  { id: '4', label: 'Floor 4', code: 'F4' },
  { id: '5', label: 'Floor 5', code: 'F5' }
];

function blockInitials(name) {
  const map = {
    'Finance Department': 'FN',
    'Administrative Block': 'AD',
    'A Block': 'A',
    'B Block': 'B',
    'Bansuri Bhawan': 'BB',
    'C Block': 'C',
    'Library': 'LB',
    'D Block': 'D',
    'SC Block': 'SC',
    'F Block': 'F',
    'E Block': 'E'
  };
  return map[name] || name.slice(0, 2).toUpperCase();
}

function renderFloorButtons() {
  floorGrid.innerHTML = floorOptions.map((floor) => `
    <button class="floor-button" type="button" data-floor="${floor.id}">
      <span class="floor-number">${floor.id === 'G' ? 'G' : floor.id}</span>
      <span class="floor-name">${floor.label}</span>
    </button>
  `).join('');

  floorGrid.querySelectorAll('.floor-button').forEach((button) => {
    button.addEventListener('click', () => openFloor(button.dataset.floor));
  });
}

function showModal(blockName, focusTarget) {
  lastFocused = focusTarget || document.activeElement;
  selectedBlock = blockName;
  modalTitle.textContent = blockName;
  modalSubtitle.textContent = 'Choose a lift or select a floor to continue.';
  blockBadge.textContent = blockInitials(blockName);
  blockOverview.classList.remove('hidden');
  floorView.classList.add('hidden');
  modalBackdrop.classList.add('open');
  modalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  closeButton.focus();
}

function closeModal() {
  modalBackdrop.classList.remove('open');
  modalBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
}

function openFloor(id) {
  const floor = floorOptions.find((item) => item.id === id);
  if (!floor) return;
  const label = floor.id === 'G' ? 'Ground Floor' : `Floor ${floor.id}`;
  floorTitle.textContent = label;
  floorChip.textContent = floor.code;
  modalSubtitle.textContent = `${selectedBlock} · ${label}`;
  blockOverview.classList.add('hidden');
  floorView.classList.remove('hidden');
  backToFloors.focus();
}

function backToOverview() {
  modalSubtitle.textContent = 'Choose a lift or select a floor to continue.';
  floorView.classList.add('hidden');
  blockOverview.classList.remove('hidden');
}

function openEBlockLift1Report() {
  grievanceLastFocused = document.activeElement;
  closeModal();
  grievanceBackdrop.classList.add('open');
  grievanceBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  grievanceClose.focus();
}

function closeGrievance() {
  grievanceBackdrop.classList.remove('open');
  grievanceBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (grievanceLastFocused && typeof grievanceLastFocused.focus === 'function') {
    grievanceLastFocused.focus();
  }
}

document.querySelectorAll('.map-block').forEach((block) => {
  const handler = () => showModal(block.dataset.block, block);
  block.addEventListener('click', handler);
  block.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handler();
    }
  });
});

document.querySelectorAll('.link-placeholder').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const lift = link.dataset.lift;
    if (selectedBlock === 'E Block' && lift === '1') {
      openEBlockLift1Report();
      return;
    }
    // add link hear
  });
});

closeButton.addEventListener('click', closeModal);
backToFloors.addEventListener('click', backToOverview);
modalBackdrop.addEventListener('click', (event) => {
  if (event.target === modalBackdrop) closeModal();
});

grievanceClose.addEventListener('click', closeGrievance);
grievanceBackdrop.addEventListener('click', (event) => {
  if (event.target === grievanceBackdrop) closeGrievance();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && grievanceBackdrop.classList.contains('open')) {
    closeGrievance();
  } else if (event.key === 'Escape' && modalBackdrop.classList.contains('open')) {
    closeModal();
  }
});

function applyZoom() {
  campusMap.style.transform = `scale(${zoomLevel})`;
}

document.getElementById('zoomIn').addEventListener('click', () => {
  zoomLevel = Math.min(1.25, +(zoomLevel + 0.1).toFixed(2));
  applyZoom();
});

document.getElementById('zoomOut').addEventListener('click', () => {
  zoomLevel = Math.max(0.9, +(zoomLevel - 0.1).toFixed(2));
  applyZoom();
});

document.getElementById('resetView').addEventListener('click', () => {
  zoomLevel = 1;
  applyZoom();
});

renderFloorButtons();
