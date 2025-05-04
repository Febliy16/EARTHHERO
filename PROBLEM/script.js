const body = document.getElementById('body-bg');

    function changeBackground(img) {
      const url = img.src;
      body.style.backgroundImage = `linear-gradient(to right, rgba(255, 255, 255, 0.29), rgba(255,255,255,0.4)), url('${url}')`;
      body.style.backgroundSize = 'cover';
      body.style.backgroundPosition = 'center';
    }

    function resetBackground() {
      body.style.backgroundImage = 'linear-gradient(to right,rgb(202, 202, 202), rgb(182, 182, 182))';
    }


    // NAVIGASI

const dynamicIsland = document.querySelector('.dynamic-island');
const buttona1 = document.getElementById('button1')
const buttona2 = document.getElementById('button2')
const buttona3 = document.getElementById('button3')

dynamicIsland.addEventListener('click', () => {
  dynamicIsland.classList.toggle('expanded');
});

button1.addEventListener('click', () => {
  window.location.href = '../index.html';
});

button2.addEventListener('click', () => {
  window.location.href = '../index.html';
});

button3.addEventListener('click', () => {
  window.location.href = '../VOICE/index.html';
});