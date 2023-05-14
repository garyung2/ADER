// 슬라이드
const imgArray = [
  'outfit_01.png',
  'outfit_02.png',
  'outfit_03.png',
  'outfit_04.png',
  'outfit_05.png',
];

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const prevBtnImg = document.querySelector('.prev > img');
const nextBtnImg = document.querySelector('.next > img');

const slides = document.querySelectorAll('.slides > li');

let currentSlide = 0;
let currentArray = 0;

function prevSlide() {
  goToSlide(currentSlide - 1);
  changeBtnImg(currentArray - 1);
}

function nextSlide() {
  goToSlide(currentSlide + 1);
  changeBtnImg(currentArray + 1);
}

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function changeBtnImg(n) {
  currentArray = (n + imgArray.length) % imgArray.length;

  if (currentArray == 0) {
    prevBtnImg.src = `./img/main/${imgArray[imgArray.length - 1]}`;
  } else {
    prevBtnImg.src = `./img/main/${imgArray[currentArray - 1]}`;
  }

  if (currentArray == imgArray.length - 1) {
    nextBtnImg.src = `./img/main/${imgArray[0]}`;
  } else {
    nextBtnImg.src = `./img/main/${imgArray[currentArray + 1]}`;
  }
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
