// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 80) {
//           $(".customNav").css("background-color" , "#16181b !important");
//         }
//         else{
//             $(".customNav").css("background-color" , "transparent !important");  	
//         }
//     })
//   })

$("#viewDetails").click(function() {
    $('html, body').animate({
        scrollTop: $("#sundayService").offset().top
    }, 500);
});