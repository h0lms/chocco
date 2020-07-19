const htmlElem = $("html");
if ($(window).width() < 400) {
  htmlElem.css("font-size", "3.7vmin");
}
$(window).resize(function(){
  if ($(window).width() < 400) {
    htmlElem.css("font-size", "3.7vmin");
  } else {
    htmlElem.css("font-size", "");
  }
});