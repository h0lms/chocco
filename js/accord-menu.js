const openItem1 = item => {
  const container1 = item.closest(".recipes__item");
  const contentBlock1 = container1.find(".recipes__description");
  // const textBlock = contentBlock.find(".member__content-block");
  const reqHeight1 = contentBlock1.width();
  
  container1.addClass("active").width(reqHeight1);
}

const closeEveryItem1 = container1 => {
  const items1 = container1.find('.recipes__description');
  const itemContainer1 = container1.find(".recipes__item");

  itemContainer1.removeClass("active");
  items1.width(0);
}

$('.member__name').click(e => {
  const $this1 = $(e.currentTarget);
  const container1 = $this1.closest('.recipes');
  const elemContainer1 = $this1.closest(".recipes__item");

  if (elemContainer1.hasClass("active")) {
    closeEveryItem1(container1);
  } else {
    closeEveryItem1(container1);
    openItem1($this1);
  }

})



// $(document).ready(() => {
//   $('.member__name').on('click', function(e) {
//     let member = $(e.currentTarget).next();
//     $(this).toggleClass('member__function--active');
//     member.slideToggle();
//   })
// });