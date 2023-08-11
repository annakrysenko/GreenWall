let menuLinks = document.querySelectorAll('.slide-link');
let burgerLinks = document.querySelectorAll('.burger-slide-link');
let wrapper = document.querySelector('.wrapper-main');
let pagination = document.querySelector('.page__pagination');

let pageSlider = new Swiper('.page', {
  wrapperClass: 'page__wrapper',
  slideClass: 'page__screen',
  direction: 'vertical',
  slidesPerView: 'auto',
  parallax: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
  watchOverflow: true,
  speed: 800,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  pagination: {
    el: '.page__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'page__bullet',
    bulletActiveClass: 'page__bullet_active',
  },
  scrollbar: {
    el: '.page__scroll',
    dragClass: 'page__drag-scroll',
    draggable: true,
  },
  init: false,
  on: {
    init: function () {
      menuSlider();
      setScrollType()
      // menuSliderBurger()
    },
    slideChange: function () {
      menuSliderRemove();
      // menuSliderRemoveBurger()
      menuLinks[pageSlider.realIndex].classList.add('_active');
    },
    resize: function () {
      setScrollType()
    }
  },

});



function menuSlider() {
  if (menuLinks.length > 0) {
    menuLinks[pageSlider.realIndex].classList.add('_active');
    for (let index = 0; index < menuLinks.length; index++) {
      const menuLink = menuLinks[index];
      menuLink.addEventListener('click', function (e) {
        menuSliderRemove();
        pageSlider.slideTo(index, 800);
        menuLink.classList.add('_active');
        e.preventDefault();
      });
    }
  }
}

function menuSliderRemove() {
  let menuLinkActive = document.querySelector('.slide-link._active');
  if (menuLinkActive) {
    menuLinkActive.classList.remove('_active');
  }
}

// burger menu
function menuSliderBurger() {
  if (menuLinks.length > 0) {
    menuLinks[pageSlider.realIndex].classList.add('_active');
    for (let index = 0; index < menuLinks.length; index++) {
      const menuLink = menuLinks[index];
      menuLink.addEventListener('click', function (e) {
        menuSliderRemove();
        pageSlider.slideTo(index, 800);
        menuLink.classList.add('_active');
        e.preventDefault();
      });
    }
  }
}
function menuSliderRemoveBurger() {
  let menuLinkActive = document.querySelector('.slide-link._active');
  if (menuLinkActive) {
    menuLinkActive.classList.remove('_active');
  }
}
// end burger menu

function setScrollType() {
  if (wrapper.classList.contains('_free')) {
    wrapper.classList.remove('_free');
    pagination.style.display = 'flex';

    pageSlider.params.freeMode = false;
  }
  for (let index = 0; index < pageSlider.slides.length; index++) {
    const pageSlide = pageSlider.slides[index];
    const pageSlideContent = pageSlide.querySelector('.screen__content');
    if (pageSlideContent) {
      const pageSlideContentWidth = pageSlideContent.offsetWidth;
      // console.log(pageSlideContentWidth)
      if (pageSlideContentWidth < 780) {
        // console.log('first')
        wrapper.classList.add('_free');
        pagination.style.display = 'none';
        pageSlider.params.freeMode = true;
        break;
      }
    }
  }

}

pageSlider.init();
