// Carrossel
let index = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
setInterval(() => {
  index = (index + 1) % images.length;
  slides.style.transform = `translateX(${-index * 100}%)`;
}, 3000);

// Menu Responsivo
const toggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');

toggle.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

  function toggleMenu() {
    const menuLista = document.querySelector('.menu-lista');
    menuLista.classList.toggle('ativo'); // Adiciona/Remove a classe ativo
  }