/*!
 * Template Name/Project Name: XYZ
 * Developer Name: Mr ABC
 * Conatct: abc@gmail.com
 * Visit: https://abc.info
 */
 // sticky header
    $(window).scroll(function(){
       var scrolling= $(this).scrollTop();

       if(scrolling > 200 ){
           $('.navbar').addClass('bbg');
       }
       else {
           $('.navbar').removeClass('bbg')
       }
    });
// scrollup
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
          $('#top_btn').fadeIn();
        }
        else{
          $('#top_btn').fadeOut()
        }
      });
      
      $("#top_btn").click(function(){
         $('html,body').animate({scrollTop : 0},800);
      });
    // scrollup