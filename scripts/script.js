// reposive menu
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
let headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
  let isClose = header.clientHeight === headerHeight;

  if (isClose) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
};

// slider
const slider = document.querySelector('.slider');
const sliderMain = document.querySelector('.slider-main');
const sliderItems = document.querySelectorAll('.slider-item');
const dotItems = document.querySelectorAll('.slider-dot-item');
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderLength = sliderItems.length;
let index = 0;
let postionX = 0;

[...dotItems].forEach((item) =>
  item.addEventListener('click', function (e) {
    [...dotItems].forEach((el) => el.classList.remove('active'));
    e.target.classList.add('active');
    const slideIndex = parseInt(e.target.dataset.index);
    index = slideIndex;
    postionX = -1 * index * sliderItemWidth;
    sliderMain.style = `transform: translateX(${postionX}px)`;
    console.log(postionX);
  }),
);
