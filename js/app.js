const switchBtn = document.getElementById('switch');
const header = document.querySelector('header');
const attribution = document.querySelector('.attribution');

switchBtn.addEventListener('click', () => {
    header.classList.toggle('change');
    attribution.classList.toggle('attribution-change')
})