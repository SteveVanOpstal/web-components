const angular = document.getElementById('angular');
const vue = document.getElementById('vue');
const react = document.getElementById('react');
const vanillajs = document.getElementById('vanillajs');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

var index = 0;

function imageIndex(i, subFolder) {
  return `http://localhost:3200/${subFolder}/${i % 4}.jpg`;
}

function changes() {
  angular.setAttribute('src', imageIndex(index, 'assets'));
  angular.setAttribute('src-thumb', imageIndex(index, 'thumbs'));
  vue.setAttribute('src', imageIndex(index + 1, 'assets'));
  vue.setAttribute('src-thumb', imageIndex(index + 1, 'thumbs'));
  react.setAttribute('src', imageIndex(index + 2, 'assets'));
  react.setAttribute('src-thumb', imageIndex(index + 2, 'thumbs'));
  vanillajs.setAttribute('src', imageIndex(index + 3, 'assets'));
  vanillajs.setAttribute('src-thumb', imageIndex(index + 3, 'thumbs'));
}

prev.addEventListener('click', () => {
  index += 1;
  index %= 4;
  changes();
});

next.addEventListener('click', () => {
  index -= 1;
  if (index < 0) {
    index = 3;
  }
  changes();
});

changes();
