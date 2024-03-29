const mesureWidth = item => {
  let reqItemWidth = 0;

  const screenWidth = $(window).width();
  const container = item.closest(".recipes");
  const titlesBlocks = container.find(".recipes__title");
  const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

  const textContainer = item.find(".recipes__container");
  const paddingLeft = parseInt(textContainer.css("padding-left"));
  const paddingRight = parseInt(textContainer.css("padding-right"));

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    reqItemWidth = screenWidth - titlesWidth;
  } else {
    reqItemWidth = 500;
  }

  return {
    container: reqItemWidth,
    textContainer: reqItemWidth - paddingLeft - paddingRight
  }
};

const closeEveryItemInContainer = (container) => {
  const items = container.find(".recipes__item");
  const content = container.find(".recipes__description");

  items.removeClass("active"); 
  content.width(0);
};

const openItemAccord = (item) => {
  const hiddenContent = item.find(".recipes__description");
  const reqWidth = mesureWidth(item);
  const textBlock = item.find(".recipes__container");

  item.addClass("active");
  hiddenContent.width(reqWidth.container);
  textBlock.width(reqWidth.textContainer);
};

$(".recipes__title").on("click", (e) => {
   e.preventDefault();

   const $this = $(e.currentTarget);
   const item = $this.closest(".recipes__item");
   const itemOpened = item.hasClass("active");
   const container = $this.closest(".recipes");

   if (itemOpened) {
    closeEveryItemInContainer(container)
  } else {
    closeEveryItemInContainer(container)
    openItemAccord(item);
   }

});

$(".recipes__close").on("click", e => {
  e.preventDefault();

  closeEveryItemInContainer($('.recipes'));
});