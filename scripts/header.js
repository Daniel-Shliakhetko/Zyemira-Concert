const checkOnScroll = () => {
  if (!($(window).width() < 768)) {
    $(".header").css({
      height: 200 - $(window).scrollTop() / 5,
    });
    $(window).scrollTop() > 200
      ? $(".navigation__background").css({ opacity: 1 })
      : $(".navigation__background").css({ opacity: 0 });
  } else {
    $(".header").css({
      height: "fit-content",
    });
    $(".navigation__background").css({ opacity: 1 });
  }
};

const onChangeSize = () => {
  if ($(window).width() < 768) {
    $(".navigation").addClass("mobile");
    $(".navigation__toggler").removeClass("active");
    $(".navigation__list").hide("slow");
  } else {
    $(".navigation").removeClass("mobile");
    $(".navigation__toggler").removeClass("active");
    $(".navigation__list").show("slow");
  }
};

const onTogglerClick = () => {
  $(".navigation__toggler").toggleClass("active");
  $(".navigation__list").toggle("slow");
};

onChangeSize();
$(window).resize(onChangeSize);

checkOnScroll();
$(window).scroll(checkOnScroll);

if ($(window).width() < 768) {

}
$(".navigation__toggler").click(onTogglerClick);

$(document).ready(()=>{
  $('.loader').css({opacity:0});
  setTimeout(()=>{
  $('.loader').css({display:"none"});
  }, 500);
})
