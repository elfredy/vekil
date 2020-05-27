$(document).ready(function () {
    $('.apply__link').click(function () {
        $('.apply__modal').addClass('modalShow');
    })

    $('.apply__close').click(function () {
        $('.apply__modal').removeClass('modalShow');
    })

    $("*").click(function (event) {
        if (!$(event.target).is(".apply__modal")) {
            //  console.log('içeri')

        } else {
            $('.apply__modal').removeClass('modalShow');

        }
    });



    $('.header__searchLink').click(function () {
        $('.searchModal').addClass('searchShow');
    })

    $('.searchModal__close').click(function () {
        $('.searchModal').removeClass('searchShow');
    })

    $("*").click(function (event) {
        if (!$(event.target).is(".searchModal")) {
            // console.log('içeri')

        } else {
            $('.searchModal').removeClass('searchShow');

        }
    });


    $('#openSearch2').click(function () {
        $('.searchModal2').addClass('searchShow');
    })

    $('.searchModal2__close').click(function () {
        $('.searchModal2').removeClass('searchShow');
    })

    $("*").click(function (event) {
        if (!$(event.target).is(".searchModal2")) {
            // console.log('içeri')

        } else {
            $('.searchModal2').removeClass('searchShow');

        }
    });
});