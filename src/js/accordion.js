const openItem = item => {
  const container = item.closest(".team__member");
  const contentBlock = container.find(".member__content");
  const textBlock = contentBlock.find(".member__content-block");
  const reqHeight = textBlock.height();
  
  container.addClass("active")
  contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
  const items = container.find('.member__content');
  const itemContainer = container.find(".team__member");

  itemContainer.removeClass("active");
  items.height(0);
}

$('.member__name').click(e => {
  const $this = $(e.currentTarget);
  const container = $this.closest('.team');
  const elemContainer = $this.closest(".team__member");

  if (elemContainer.hasClass("active")) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }

})



// $(document).ready(() => {
//   $('.member__name').on('click', function(e) {
//     let member = $(e.currentTarget).next();
//     $(this).toggleClass('member__function--active');
//     member.slideToggle();
//   })
// });