// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function closeOrderForm() {
  document.querySelector('.modal-order').classList.add('modal-order--hidden');
}

function openOrderForm() {
  document.querySelector('.modal-order').classList.remove('modal-order--hidden');
}

document.querySelectorAll('[data-js="close-order-form"]').forEach(el => {
  el.addEventListener('click', function(evt) {
    evt.preventDefault();
    closeOrderForm();
  });
});

document.querySelectorAll('[data-js="open-order-form"]').forEach(el => {
  el.addEventListener('click', function(evt) {
    evt.preventDefault();
    openOrderForm();
  });
});

const elements = document.querySelectorAll('.video-player-panel__range');

const inputEvt = new Event('input');
elements.forEach((el) => {
  el.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
  });
  el.dispatchEvent(inputEvt);
});

const renderRandomGallery = () => {
  //random gallery
  const galleryImages = Array(15).fill('')
    .map((_, idx) =>
      `<img class="gallery-img" src="./assets/img/gallery/galery${idx + 1}.jpg" alt="galery${idx +
      1}">`,
    );

  shuffle(galleryImages);
  const pictureInnerContainer = document.querySelector('.gallery-list');
  pictureInnerContainer.innerHTML = galleryImages.join('');
};

renderRandomGallery();

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const images = [];
    document.querySelectorAll('.gallery-img').forEach((el, i) => {
      if (el.offsetTop < 10) {
        images.push(el);
      }
    });

    images.forEach((el, idx) => {
      if (idx % 2 === 0) {
        el.classList.add('gallery-img--has-top-margin');
      }
    });

  }, 100);
});

