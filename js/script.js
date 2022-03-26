// ==========service part start =========

$('.service_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    centerMode:true,
    centerPadding:0,
    prevArrow:'<i class="fa-solid fa-circle-arrow-left prevarrow"></i>',
    nextArrow:'<i class="fa-solid fa-circle-arrow-right nextarrow"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
// ==========service part end =========
// =======portfolio part start ======
$('.venobox').venobox()
// =======portfolio part end ======
// ==========testimonial part start ==========
$('.testimonoal_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:true,
  centerMode:true,
  centerPadding:0,
  focusOnSelect:true,
  prevArrow:'<i class="fa-solid fa-circle-arrow-left prevarrow"></i>',
  nextArrow:'<i class="fa-solid fa-circle-arrow-right nextarrow"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// ==========testimonial part end ==========
// ======footer part start ==========
$('.footer_venobox').venobox()
// ======footer part end ==========
// =========sticky menu part ========
var main_menu = document.getElementById("main_menu");
window.addEventListener("scroll",function(){
main_menu.classList.toggle("sticky",window.scrollY > 100);
})
// =========sticky menu part ========
// ========back to top part ======
$(window).scroll(function(){
  if($(this).scrollTop() > 200){
    $(".back_to_top").addClass("bottom_to_top")
  }else{
    $(".back_to_top").removeClass("bottom_to_top")
  }
});
// ========back to top part ======