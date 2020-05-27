$(document).ready(function (){
    function expand() {
        $(this).toggleClass("on");
        $(".menu").toggleClass("mobActive");
    };
    $(".button").on('click', expand);
});