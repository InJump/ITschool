class Slider {
constructor(params) {
const {
warpperSelector,
slideSelector,
btnPrev,
btnNext,
} = params;

this.wrapperEl = document.querySelector(warpperSelector);
this.slide = this.wrapperEl.querySelectorAll(slideSelector);
this.btnPrev = document.getElementById(btnPrev);
this.btnNext = document.getElementById(btnNext);

this.index = 0;
this.slideSize = 0;

this.init();
}

init() {
this.slideSize = this.slide[0].clientWidth;
this.wrapperEl.style.transform = 'translate(' + (-this.slideSize * this.index) +'px)';

this.nextSlide();
this.prevSlide();
this.animationEnd();
}

nextSlide() {
this.btnNext.addEventListener('click', () => {
if (this.index >= this.slide.length - 1) return;
  
this.index += 1;

this.wrapperEl.style.transition = 'transform .3s ease-in-out';
this.wrapperEl.style.transform = 'translate(' + (-this.slideSize * this.index) +'px)';
})
}

prevSlide() {
  // if (this.index <= 0) return;
this.btnPrev.addEventListener('click', () => {
this.index -= 1;

this.wrapperEl.style.transition = 'transform .3s ease-in-out';
this.wrapperEl.style.transform = 'translate(' + (-this.slideSize * this.index) +'px)';
})
}

animationEnd() {
  this.wrapperEl.addEventListener('transitionend', () => {
    if (this.slide[this.index].id === 'lastSlide') {
      this.wrapperEl.style.transition = 'none';
      this.index = this.slide.length - 2;
      this.wrapperEl.style.transform = 'translate(' + (-this.slideSize * this.index) +'px)';
    }
    if (this.slide[this.index].id === 'firstSlide') {
      this.wrapperEl.style.transition = 'none';
      this.index = this.slide.length - this.index;
      this.wrapperEl.style.transform = 'translate(' + (-this.slideSize * this.index) +'px)';
    }
  });
}
}

const DEFAULT_PARAMS = {
warpperSelector: '.slider__wrapper',
slideSelector: '.slider__slide',
btnPrev: 'prev',
btnNext: 'next',
}

new Slider(DEFAULT_PARAMS);
