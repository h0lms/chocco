const slider = $('.sliders__list').bxSlider({
  pager: false,
  controls: false
});

$('.sliders__arrow--left').click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
})
$('.sliders__arrow--right').click(e => {
  e.preventDefault();
  slider.goToNextSlide();
})