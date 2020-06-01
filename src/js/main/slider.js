$(document).ready(function () {
    $('.headerCarousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots:false,
        responsive: {
            0: {
                items: 2,
                margin: 10

            },
            600: {
                items: 3
            },

            1000:{
                items:5
            },
            1551: {
               
                items: 7
            }
        }
    });

    $('.homeNews__carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots:true,
        responsive: {
            0: {
                items: 1,
                loop: true

            },
            768: {
                items: 2,
                loop: true
            },
            1000: {
               
                items: 3
            }
        }
    });

    



    $( function() {
        $( "#accordion" ).accordion({
          collapsible: true
        });
      } );
});