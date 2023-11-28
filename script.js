const btnEl = document.querySelector('.menuMenu');
const btnHeadEl = document.querySelector('.mainMenu');

btnEl.addEventListener('click', function() {
  btnEl.classList.toggle('active');
  // btnHeadEl.classList.toggle('mainMenu');
  console.log(`kauga huyu`);
})