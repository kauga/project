// const btnEl = document.querySelector('.menuMenu');
// const btnHeadEl = document.querySelector('.mainMenu');

// btnEl.addEventListener('click', function() {
//   btnEl.classList.toggle('active');
//   btnHeadEl.classList.toggle('mainMenu');
//   console.log(`kauga huyu`);
// })

const btnEl = document.querySelector('.mainMenu');
const btnOpen = document.querySelector('.menuOpen');
const btnClose = document.querySelector('.menuClose');

btnOpen.addEventListener('click', show);
btnClose.addEventListener('click', close);

function show() {
  btnEl.style.display = 'flex';
  btnEl.style.top = '0';
  console.log(`hellow`);
}

function close() {
  btnEl.style.top = '-100%';
  console.log(`hellow world`);
}