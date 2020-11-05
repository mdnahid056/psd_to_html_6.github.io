$(document).ready(function(){
    $(".navbar-toggler, .overlay").on("click", function(){
        $(".sideNav, .overlay").toggleClass("open");
    })
});


function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
} 
$(window).scroll(function(){
    $('nav') .toggleClass('scrolled',$(this).scrollTop()>50);
});


$('#singlebox').selectator();
$('#multibox').selectator();



$(window).scroll(function(){
  $('nav') .toggleClass('scrolled',$(this).scrollTop()>50);
});

$('.owl-carousel').owlCarousel({
   loop:true,
   autoplay:true,
   autoplayTimeout:4000,
   dots:false,
   dotsData:true,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

$(function () {
  $('[data-toggle="popover"]').popover()
})