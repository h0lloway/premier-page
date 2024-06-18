// стрелка якорь
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 500,
  framesCount = 60;

anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    let scroller = setInterval(function () {
      let scrollBy = coordY / framesCount;

      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});


// модальное окно
const btns = document.querySelectorAll('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-modal-btn');
const closeButton = document.querySelectorAll('.close-btn');
const body = document.body;
const fixBlocks = document.querySelectorAll('.fix-block');


let disableScroll = function () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  let pagePosition = window.scrollY;
  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  });
  body.style.paddingRight = paddingOffset;
  body.classList.add('disable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px';
}

let enableScroll = function () {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  fixBlocks.forEach((el) => {
    el.style.paddingRight = '0px';
  });
  body.style.paddingRight = '0px';
  window.scroll({ top: pagePosition, left: 0 });
  body.removeAttribute('data-position');
}

closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', function (event) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    enableScroll();

  });
});

closeButton.forEach(closeBtn => {
  closeBtn.addEventListener('click', function (event) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    enableScroll();

  });
});

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');


    disableScroll();

    modals.forEach((el) => {
      el.classList.remove('modal-overlay--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible')
    modalOverlay.classList.add('modal-overlay--visible');
  });
});


modalOverlay.addEventListener('click', (e) => {

  if (e.target == modalOverlay) {

    enableScroll();

    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  }
});

document.getElementById('btn-submit').onclick = function () {
  // console.log('work')
  document.getElementById('modal-two').classList.add('modal--visible');
  document.getElementById('modal-one').classList.remove('modal--visible');
}

// swiper img

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      spaceBetween: 15,
      slidesPerGroup: 1,
      slidesPerView: 2,
      centeredSlides: true,
    },
    700: {
      slidesPerGroup: 1,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1100: {
      spaceBetween: 30,
      slidesPerView: 4,
    },

  },
});

const textBottomSwiper = new Swiper('.text-bottom-swiper', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: true,
  centeredSlides: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

});


