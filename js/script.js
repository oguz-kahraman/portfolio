
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav?.classList.remove('open'));
});
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
