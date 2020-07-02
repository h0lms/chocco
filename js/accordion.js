$(document).ready(() => {
  $('.member__name').on('click', function(e) {
    let member = $(e.currentTarget).next();
    $(this).toggleClass('member__function--active');
    member.slideToggle();
  })
});