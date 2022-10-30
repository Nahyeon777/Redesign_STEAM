$(document).ready(function () {

     // slick
    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 300,
        dots:false,
        slidesToShow: 1,
        // centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:true
    });

    // console.log(scrollY)
    $(".to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    // cate-menu
    $(".cate").click(function (e) { 
        $(".cate-menu").css('transform', 'translateX(0)')
    });
    $(".close").click(function (e) {
        $(".cate-menu").css('transform', 'translateX(100%)')
    })

});