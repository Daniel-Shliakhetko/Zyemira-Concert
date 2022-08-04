const paddingTop = $(".header").css("padding-top");

$(window).scroll(() => {
  $(".header").css({
    paddingTop: paddingTop - $(window).scrollTop() / 5,
  });
});
