(function () {
console.log('[load] script.js loaded');

// i18n dictionaries
const DICTS = {
fr: {
'nav.about': 'Qui sommes-nous ?',
'about.title': 'Qui sommes-nous ?',
'about.text': "Mvital Travel s'efforce d'offrir la meilleure expérience zanzibarienne au monde, non pas dans le luxe, mais à un prix abordable et en contact avec la population locale, non seulement pour des vacances à la plage, mais aussi pour explorer l'île. Ma vision et mon plus grand souhait en créant Mvital Travel ne sont pas l'argent, mais la création de souvenirs inoubliables avec mes clients, qui resteront gravés à vie.",
'nav.services': 'Services',
'nav.booking': 'Réservation',
'nav.reviews': 'Avis',
'nav.contact': 'Contact',
'brand.title': 'Voyages MVITA',
'hero.location': 'Zanzibar, Tanzanie',
'hero.title': 'Transferts & Excursions, esprit de Zanzibar',
'hero.lead': "Des eaux turquoises aux fermes d'épices, profitez de chauffeurs ponctuels, de véhicules confortables et d'expériences authentiques. Réservez en un clic sur WhatsApp.",
'badges.airport': 'Aéroport ↔ Hôtel',
'badges.private': 'Excursions privées',
'badges.whatsapp': 'Support WhatsApp',
'services.title': 'Nos services',
'cards.taxi.title': 'Transferts & Taxi privé',
'cards.taxi.desc': 'Aéroport ↔ Hôtel et voyages sur mesure. Chauffeurs professionnels, prix clairs. Disponible 24h/24 et 7j/7',
'cards.excursions.title': 'Excursions',
'cards.excursions.desc': 'Safari Blue, Prison Island, Stone Town, dhow au coucher du soleil et plus encore.',
'cards.spice.title': 'Spice Tour',
'cards.spice.desc': "Visitez les fermes d’épices, dégustez et découvrez l’héritage swahili.",
'booking.title': 'Réservation rapide',
'booking.lead': 'Complétez le formulaire : votre message est prêt pour WhatsApp.',
'form.service': 'Service',
'form.date': 'Date',
'form.time': 'Heure',
'form.passengers': 'Passagers',
'form.pickup': 'Départ',
'form.dropoff': 'Destination',
'form.notes': 'Notes',
'form.confirm': 'Confirmer',
'form.whatsapp': 'WhatsApp',
'form.opt.transfer': 'Transfert Aéroport',
'form.opt.taxi': 'Taxi privé',
'form.opt.safari': 'Safari Blue',
'form.opt.prison': 'Prison Island',
'form.opt.stone': 'Stone Town',
'form.opt.spice': 'Spice Tour',
'reviews.title': 'Avis clients',
'reviews.leave': 'Laisser un avis',
'reviews.note': 'Note',
'reviews.name': 'Nom',
'reviews.comment': 'Commentaire',
'reviews.send': 'Envoyer l’avis',
'footer.location': 'Zanzibar, Tanzanie',
'js.alert.required': 'Veuillez remplir tous les champs obligatoires.',
'js.review.missing': 'Veuillez saisir un nom, un commentaire, et une note valide.',
'js.review.thanks': 'Merci pour votre avis !',
'wa.message.header': 'Bonjour MVITA Travels !',
'wa.message.labels.service': 'Service',
'wa.message.labels.date': 'Date',
'wa.message.labels.time': 'Heure',
'wa.message.labels.pickup': 'Départ',
'wa.message.labels.dropoff': 'Destination',
'wa.message.labels.passengers': 'Passagers',
'wa.message.labels.notes': 'Notes',
'wa.message.thanks': 'Merci !',
},
en: {
'nav.about': 'About us',
'about.title': 'About us',
'about.text': "Mvital Travel strives to offer the world's best Zanzibar experience, not in luxury, but at an affordable price and in touch with the local population, not only for beach holidays but also to explore the island. My vision and greatest wish in creating Mvital Travel is not money, but creating unforgettable memories with my clients, memories that will last a lifetime.",
'nav.services': 'Services',
'nav.booking': 'Booking',
'nav.reviews': 'Reviews',
'nav.contact': 'Contact',
'brand.title': 'MVITA Travels',
'hero.location': 'Zanzibar, Tanzania',
'hero.title': 'Transfers & Excursions, Zanzibar spirit',
'hero.lead': 'From turquoise waters to spice farms, enjoy punctual drivers, comfortable vehicles and authentic experiences. Book in one click on WhatsApp.',
'badges.airport': 'Airport ↔ Hotel',
'badges.private': 'Private tours',
'badges.whatsapp': 'WhatsApp support',
'services.title': 'Our services',
'cards.taxi.title': 'Transfers & Private Taxi',
'cards.taxi.desc': 'Airport ↔ Hotel and custom rides. Professional drivers, clear prices. Available 24/7',
'cards.excursions.title': 'Excursions',
'cards.excursions.desc': 'Safari Blue, Prison Island, Stone Town, sunset dhow and more.',
'cards.spice.title': 'Spice Tour',
'cards.spice.desc': 'Visit spice farms, taste and discover Swahili heritage.',
'booking.title': 'Quick booking',
'booking.lead': 'Fill in the form: your message is ready for WhatsApp.',
'form.service': 'Service',
'form.date': 'Date',
'form.time': 'Time',
'form.passengers': 'Passengers',
'form.pickup': 'Pickup',
'form.dropoff': 'Dropoff',
'form.notes': 'Notes',
'form.confirm': 'Confirm',
'form.whatsapp': 'WhatsApp',
'form.opt.transfer': 'Airport Transfer',
'form.opt.taxi': 'Private Taxi',
'form.opt.safari': 'Safari Blue',
'form.opt.prison': 'Prison Island',
'form.opt.stone': 'Stone Town',
'form.opt.spice': 'Spice Tour',
'reviews.title': 'Customer reviews',
'reviews.leave': 'Leave a review',
'reviews.note': 'Rating',
'reviews.name': 'Name',
'reviews.comment': 'Comment',
'reviews.send': 'Send review',
'footer.location': 'Zanzibar, Tanzania',
'js.alert.required': 'Please fill all required fields.',
'js.review.missing': 'Please enter a name, a comment, and a valid rating.',
'js.review.thanks': 'Thanks for your review!',
'wa.message.header': 'Hello MVITA Travels!',
'wa.message.labels.service': 'Service',
'wa.message.labels.date': 'Date',
'wa.message.labels.time': 'Time',
'wa.message.labels.pickup': 'Pickup',
'wa.message.labels.dropoff': 'Dropoff',
'wa.message.labels.passengers': 'Passengers',
'wa.message.labels.notes': 'Notes',
'wa.message.thanks': 'Thanks!',
},
es: {
'nav.about': '¿Quiénes somos?',
'about.title': '¿Quiénes somos?',
'about.text': "Mvital Travel se esfuerza por ofrecer la mejor experiencia de Zanzíbar del mundo, no en el lujo, sino a un precio asequible y en contacto con la población local, no solo para unas vacaciones en la playa sino también para explorar la isla. Mi visión y mi mayor deseo al crear Mvital Travel no es el dinero, sino crear recuerdos inolvidables con mis clientes, recuerdos que durarán toda la vida.",
'nav.services': 'Servicios',
'nav.booking': 'Reserva',
'nav.reviews': 'Opiniones',
'nav.contact': 'Contacto',
'brand.title': 'MVITA Travels',
'hero.location': 'Zanzíbar, Tanzania',
'hero.title': 'Traslados y Excursiones, espíritu de Zanzíbar',
'hero.lead': 'Desde aguas turquesas hasta granjas de especias, disfrute de conductores puntuales, vehículos cómodos y experiencias auténticas. Reserve en un clic por WhatsApp.',
'badges.airport': 'Aeropuerto ↔ Hotel',
'badges.private': 'Excursiones privadas',
'badges.whatsapp': 'Soporte por WhatsApp',
'services.title': 'Nuestros servicios',
'cards.taxi.title': 'Traslados y Taxi privado',
'cards.taxi.desc': 'Aeropuerto ↔ Hotel y viajes a medida. Conductores profesionales, precios claros. Disponible 24/7',
'cards.excursions.title': 'Excursiones',
'cards.excursions.desc': 'Safari Blue, Prison Island, Stone Town, dhow al atardecer y más.',
'cards.spice.title': 'Spice Tour',
'cards.spice.desc': 'Visite granjas de especias, pruebe y descubra el patrimonio suajili.',
'booking.title': 'Reserva rápida',
'booking.lead': 'Complete el formulario: su mensaje está listo para WhatsApp.',
'form.service': 'Servicio',
'form.date': 'Fecha',
'form.time': 'Hora',
'form.passengers': 'Pasajeros',
'form.pickup': 'Salida',
'form.dropoff': 'Destino',
'form.notes': 'Notas',
'form.confirm': 'Confirmar',
'form.whatsapp': 'WhatsApp',
'form.opt.transfer': 'Traslado Aeropuerto',
'form.opt.taxi': 'Taxi privado',
'form.opt.safari': 'Safari Blue',
'form.opt.prison': 'Prison Island',
'form.opt.stone': 'Stone Town',
'form.opt.spice': 'Spice Tour',
'reviews.title': 'Opiniones de clientes',
'reviews.leave': 'Dejar una opinión',
'reviews.note': 'Nota',
'reviews.name': 'Nombre',
'reviews.comment': 'Comentario',
'reviews.send': 'Enviar opinión',
'footer.location': 'Zanzíbar, Tanzania',
'js.alert.required': 'Complete todos los campos obligatorios.',
'js.review.missing': 'Ingrese un nombre, un comentario y una nota válida.',
'js.review.thanks': '¡Gracias!',
'wa.message.header': '¡Hola MVITA Travels!',
'wa.message.labels.service': 'Servicio',
'wa.message.labels.date': 'Fecha',
'wa.message.labels.time': 'Hora',
'wa.message.labels.pickup': 'Salida',
'wa.message.labels.dropoff': 'Destino',
'wa.message.labels.passengers': 'Pasajeros',
'wa.message.labels.notes': 'Notas',
'wa.message.thanks': '¡Gracias!',
},
};

const I18N_KEY = 'mvita-lang';

function getLang() {
return localStorage.getItem(I18N_KEY) || document.documentElement.lang || 'fr';
}
function setLang(lang) {
localStorage.setItem(I18N_KEY, lang);
document.documentElement.lang = lang;
}
function t(key) {
const lang = getLang();
return (DICTS[lang] && DICTS[lang][key]) || (DICTS.fr && DICTS.fr[key]) || key;
}
window.__t = t;

function applyI18n() {
try {
document.querySelectorAll('[data-i18n]').forEach(el => {
const key = el.getAttribute('data-i18n');
const value = t(key);
el.textContent = value;
});
const optMap = {
'form.opt.transfer': '#service option:nth-child(1)',
'form.opt.taxi': '#service option:nth-child(2)',
'form.opt.safari': '#service option:nth-child(3)',
'form.opt.prison': '#service option:nth-child(4)',
'form.opt.stone': '#service option:nth-child(5)',
'form.opt.spice': '#service option:nth-child(6)',
};
for (const [k, sel] of Object.entries(optMap)) {
const o = document.querySelector(sel);
if (o) o.textContent = t(k);
}
if (typeof window.updateWaLink === 'function') window.updateWaLink();
} catch (e) {
console.error('[i18n] apply error:', e);
}
}

document.addEventListener('DOMContentLoaded', () => {
const select = document.getElementById('lang');
const lang = getLang();
if (select) {
select.value = lang;
select.addEventListener('change', () => {
setLang(select.value);
applyI18n();
if (typeof window.renderReviews === 'function') window.renderReviews();
});
}
setLang(lang);
applyI18n();


const y = document.getElementById('year');
if (y && !y.textContent) y.textContent = new Date().getFullYear();
});

// WhatsApp
(function bookingToWhatsApp() {
const form = document.getElementById('booking-form');
const waLink = document.getElementById('wa-link');
const phone = '255773543109';
if (!form || !waLink) return;


function buildMessage() {
  const service = form.service?.value || '';
  const date = form.date?.value || '';
  const time = form.time?.value || '';
  const pickup = form.pickup?.value || '';
  const dropoff = form.dropoff?.value || '';
  const passengers = form.passengers?.value || '';
  const notes = form.notes?.value || '';
  const lines = [
    __t('wa.message.header'),
    `${__t('wa.message.labels.service')}: ${service}`,
    `${__t('wa.message.labels.date')}: ${date}`,
    `${__t('wa.message.labels.time')}: ${time}`,
    `${__t('wa.message.labels.pickup')}: ${pickup}`,
    `${__t('wa.message.labels.dropoff')}: ${dropoff}`,
    `${__t('wa.message.labels.passengers')}: ${passengers}`,
  ];
  if (notes && notes.trim()) {
    lines.push(`${__t('wa.message.labels.notes')}: ${notes.trim()}`);
  }
  lines.push(__t('wa.message.thanks'));
  return lines.join('\n');
}

window.updateWaLink = function updateWaLink() {
  try {
    const text = encodeURIComponent(buildMessage());
    waLink.href = `https://wa.me/${phone}?text=${text}`;
  } catch (e) {
    console.error('[wa] update error:', e);
  }
};

window.updateWaLink();
form.addEventListener('input', window.updateWaLink);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const requiredOk =
    form.service.value && form.date.value && form.time.value &&
    form.pickup.value && form.dropoff.value;
  if (!requiredOk) {
    alert(__t('js.alert.required'));
    return;
  }
  window.updateWaLink();
  window.open(waLink.href, '_blank', 'noopener');
});
})();

// Admin mode (via URL hash) + Reviews + étoiles
(function reviews() {
const listEl = document.getElementById('reviews-list');
const form = document.getElementById('review-form');
const ratingHidden = document.getElementById('rating-value');
if (!listEl || !form || !ratingHidden) return;


// Admin via hash: #admin=mvita2025!Z@zanzibar
const ADMIN_HASH_KEY = 'admin';
const ADMIN_SECRET = 'mvita2025!Z@zanzibar';

function getHashParams() {
  // Ex: "#admin=xxx&foo=bar"
  const hash = (location.hash || '').replace(/^#/, '');
  const params = new URLSearchParams(hash);
  return params;
}
function isAdminMode() {
  const p = getHashParams();
  return p.get(ADMIN_HASH_KEY) === ADMIN_SECRET;
}

// Afficher un badge "Admin" si actif
function mountAdminBadge() {
  if (!isAdminMode()) return;
  if (document.getElementById('admin-badge')) return;
  const badge = document.createElement('div');
  badge.id = 'admin-badge';
  badge.textContent = 'Admin';
  Object.assign(badge.style, {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    zIndex: '9999',
    padding: '6px 10px',
    borderRadius: '999px',
    fontWeight: '800',
    fontSize: '12px',
    letterSpacing: '.2px',
    color: '#075443',
    background: 'linear-gradient(180deg,#e7fff7,#ffffff)',
    border: '1px solid #b9efe1',
    boxShadow: '0 6px 16px rgba(22,160,133,.18)',
    pointerEvents: 'none',
    userSelect: 'none',
  });
  document.body.appendChild(badge);
}

// Réagir si le hash change (activation/désactivation admin)
window.addEventListener('hashchange', () => {
  // Re-render pour afficher/cacher boutons supprimer
  window.renderReviews?.();
  // Gérer badge
  const existing = document.getElementById('admin-badge');
  if (isAdminMode()) {
    if (!existing) mountAdminBadge();
  } else if (existing) {
    existing.remove();
  }
});

const STORAGE_KEY = 'mvita-reviews-v1';

function getReviews() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}
function saveReviews(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

window.renderReviews = function renderReviews() {
  const items = getReviews();
  listEl.innerHTML = '';
  if (items.length === 0) {
    const p = document.createElement('p');
    p.className = 'muted';
    p.textContent = '—';
    listEl.appendChild(p);
    return;
  }
  items.forEach((r, idx) => {
    const div = document.createElement('div');
    div.className = 'review';
    const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
    const date = new Date(r.date);
    const loc = document.documentElement.lang || 'fr';
    const formatted = date.toLocaleDateString(loc, { year: 'numeric', month: 'short', day: 'numeric' });

    const header = document.createElement('div');
    header.innerHTML = `<strong>${r.name}</strong> <span class="stars">${stars}</span>`;

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = formatted;

    const comment = document.createElement('p');
    comment.textContent = r.comment;

    div.appendChild(header);
    div.appendChild(meta);
    div.appendChild(comment);

    // Bouton Supprimer uniquement en mode admin
    if (isAdminMode()) {
      const del = document.createElement('button');
      del.type = 'button';
      del.textContent = 'Supprimer';
      del.className = 'btn outline';
      del.style.marginTop = '6px';
      del.addEventListener('click', () => {
        const confirmMsg = 'Supprimer cet avis ? Cette action est définitive.';
        if (!confirm(confirmMsg)) return;
        const current = getReviews();
        current.splice(idx, 1);
        saveReviews(current);
        window.renderReviews();
      });
      div.appendChild(del);
    }

    listEl.appendChild(div);
  });

  // Ajouter/retirer le bouton "Réinitialiser tous les avis" selon le mode
  const existingReset = document.getElementById('reset-reviews-btn');
  if (isAdminMode()) {
    if (!existingReset) {
      const resetBtn = document.createElement('button');
      resetBtn.type = 'button';
      resetBtn.id = 'reset-reviews-btn';
      resetBtn.className = 'btn outline';
      resetBtn.textContent = 'Réinitialiser tous les avis';
      resetBtn.style.marginTop = '10px';
      resetBtn.addEventListener('click', () => {
        if (!confirm('Supprimer tous les avis ?')) return;
        localStorage.removeItem(STORAGE_KEY);
        window.renderReviews();
      });
      listEl.parentElement.insertBefore(resetBtn, listEl.nextSibling);
    }
  } else if (existingReset) {
    existingReset.remove();
  }
};

// Etoiles interactives
const starButtons = Array.from(document.querySelectorAll('.stars-input button'));
function applyActiveFromValue(val) {
  const n = Number(val || '0');
  starButtons.forEach((b) => {
    const v = Number(b.dataset.value || '0');
    b.classList.toggle('active', v <= n);
  });
}
applyActiveFromValue(ratingHidden.value || '5');

starButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const val = Number(btn.dataset.value || '5');
    ratingHidden.value = String(val);
    applyActiveFromValue(val);
  });
  btn.addEventListener('mouseenter', () => {
    const val = Number(btn.dataset.value || '0');
    applyActiveFromValue(val);
  });
});
document.querySelector('.stars-input')?.addEventListener('mouseleave', () => {
  applyActiveFromValue(ratingHidden.value || '0');
});

// Envoi avis
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const comment = form.comment.value.trim();
  const rating = Number(ratingHidden.value || '5');
  if (!name || !comment || rating < 1) {
    alert(__t('js.review.missing'));
    return;
  }
  const items = getReviews();
  items.unshift({ name, comment, rating, date: new Date().toISOString() });
  saveReviews(items);
  form.reset();
  ratingHidden.value = '5';
  applyActiveFromValue(5);
  window.renderReviews();
  alert(__t('js.review.thanks'));
});

// Premier rendu + badge si besoin
window.renderReviews();
mountAdminBadge();
})();

})();