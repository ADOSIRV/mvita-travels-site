// Helpers i18n
const __t = (k) => window.__t ? window.__t(k) : k;

// WhatsApp form integration
(function bookingToWhatsApp(){
const form = document.getElementById('booking-form');
const waLink = document.getElementById('wa-link');
const phone = '255773543109';

if(!form || !waLink) return;

function buildMessage(){
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

function updateWaLink(){
const text = encodeURIComponent(buildMessage());
waLink.href = https://wa.me/${phone}?text=${text};
}

// Initial link
updateWaLink();

// Update on input changes
form.addEventListener('input', updateWaLink);

// Submit behavior: validate minimal required fields and open WhatsApp
form.addEventListener('submit', (e)=>{
e.preventDefault();
const requiredOk = form.service.value && form.date.value && form.time.value && form.pickup.value && form.dropoff.value;
if(!requiredOk){
alert(__t('js.alert.required'));
return;
}
updateWaLink();
window.open(waLink.href, '_blank', 'noopener');
});

// Update when language changes (so labels and header in message switch)
document.getElementById('lang')?.addEventListener('change', updateWaLink);
})();

// Reviews (local, simple demo)
(function reviews(){
const listEl = document.getElementById('reviews-list');
const form = document.getElementById('review-form');
const ratingHidden = document.getElementById('rating-value');
if(!listEl || !form || !ratingHidden) return;

const STORAGE_KEY = 'mvita-reviews-v1';

function getReviews(){
try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
catch { return []; }
}
function saveReviews(items){
localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function render(){
const items = getReviews();
listEl.innerHTML = '';
if(items.length === 0){
const p = document.createElement('p');
p.className = 'muted';
p.textContent = '—';
listEl.appendChild(p);
return;
}
items.forEach(r=>{
const div = document.createElement('div');
div.className = 'review';
const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
const date = new Date(r.date);
const loc = document.documentElement.lang || 'fr';
const formatted = date.toLocaleDateString(loc, {year:'numeric', month:'short', day:'numeric'});
div.innerHTML =         <div><strong>${r.name}</strong> <span class="stars">${stars}</span></div>         <div class="meta">${formatted}</div>         <p>${r.comment}</p>      ;
listEl.appendChild(div);
});
}

// Stars selection
document.querySelectorAll('.stars-input button').forEach(btn=>{
btn.addEventListener('click', ()=>{
const val = Number(btn.dataset.value || '5');
ratingHidden.value = String(val);
document.querySelectorAll('.stars-input button').forEach(b=>b.classList.toggle('active', b === btn));
});
});

form.addEventListener('submit', (e)=>{
e.preventDefault();
const name = form.name.value.trim();
const comment = form.comment.value.trim();
const rating = Number(ratingHidden.value || '5');
if(!name || !comment || rating < 1){
alert(__t('js.review.missing'));
return;
}
const items = getReviews();
items.unshift({ name, comment, rating, date: new Date().toISOString() });
saveReviews(items);
form.reset();
ratingHidden.value = '5';
document.querySelectorAll('.stars-input button').forEach(b=>b.classList.remove('active'));
render();
alert(__t('js.review.thanks'));
});

// Re-render on language change (for date format)
document.getElementById('lang')?.addEventListener('change', render);

render();
})();

// Year in footer (fallback if not set inline)
(function year(){
const y = document.getElementById('year');
if (y && !y.textContent) y.textContent = new Date().getFullYear();
})();