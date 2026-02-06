document.querySelectorAll('.placeholder').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 10%)';
    });
    el.addEventListener('mouseleave', () => {
        el.style.boxShadow = 'none';
    });
});

console.log('Northly site loaded');

const images = [
    "img/Logoversion1.png",
    "img/Logoversion2.png",
    "img/Logoversion3.png"
];

let current= 0;
const hero = document.querySelector(".hero");

hero.style.backgroundImage = `url(${images[0]})`;

setInterval(() => {
    current = (current + 1) % images.length;
    hero.style.backgroundImage = `url(${images[current]})`;
}, 4000);