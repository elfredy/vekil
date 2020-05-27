$(document).ready(function () {
       window.onscroll = function () { fixFunction() };
      var header = document.getElementById("myHeader");
      var sticky = header.offsetTop;
  
      function fixFunction() {
          if (window.pageYOffset > sticky) {
              header.classList.add("headerFix");
              $('.headerFix').fadeIn("slow");
          } else {
              header.classList.remove("headerFix");
  
            $('.headerFix').fadeOut("slow");
          }
      } 

/*     $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 160) {
            //$('.header').addClass('headerFix');
            // $('.header').removeClass('fadeInLeft');
            //    $('.headerFix').addClass('fadeInDown');
            //    $('.headerFix').removeClass('fadeOutUp');
            //    $('.headerFix').addClass('animated');
            $('#myHeader').addClass("headerFix");
            $('.headerFix').fadeIn("slow");
        } else {
            // $('.header').addClass('fadeInLeft');
            // $('.header').removeClass('fadeOutLeft');
            //    $('.headerFix').addClass('fadeOutUp');
            //    $('.headerFix').removeClass('fadeInUp');
            $('#myHeader').removeClass('headerFix');
            $('.headerFix').fadeOut("slow");

        }
    }); */
});