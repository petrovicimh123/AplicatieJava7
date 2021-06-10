const loadText = document.querySelector('.loading-text');
const container = document.querySelector('.container');
const bg = document.querySelector('.bg');
console.warn(bg);
let load = 0;
let opacity = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  opacity++;
  bg.style.opacity = `${opacity / 100}`;
  loadText.innerHTML = load + '%';

  if (load > 99) {
    clearInterval(int);
    container.classList.add('fade-out');
  }
}
