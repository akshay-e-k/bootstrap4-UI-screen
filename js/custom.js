// $(window).scroll(function () {
// var st = $(this).scrollTop();
//     if (st < 20){
//         $(".pre-header-row").show();
//         $(".main-header").css({"position":"fixed"});
//     } else {
//         $(".pre-header-row").hide();
//         $(".main-header").css({"position":"sticky"});
//     }

// });
$(window).scroll(function() {
    if($(this).width() >= 992) {
        if ($(this).scrollTop() > 20) {
            $(".pre-header-row").hide();
            $(".main-header").css({"position":"sticky", "top": "0", "background-color": "#fff", "zIndex": "1"});
        } else {
            $(".pre-header-row").show();
            $(".main-header").css({"position":"fixed", "top": "36px","width": "100%", "background-color": "transparent"});
        }
    }
});