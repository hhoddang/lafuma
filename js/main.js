$(function(){
    $('.visual').slick({
        autoplay:true,
        dots:true
      });
    $('.family_button').click(function(){
        $('.family_list').toggle();
    });
    $('.main_img li a').mouseenter(function(){
        $(this).find('.cover').stop().fadeIn(200);
    });
    $('.main_img li a').mouseleave(function(){
        $(this).find('.cover').stop().fadeOut(200);
    });
    $('.sns li a').mouseenter(function(){
        $(this).find('.cover').stop().fadeIn(300);
    });
    $('.sns li a').mouseleave(function(){
        $(this).find('.cover').stop().fadeOut(300);
    });
    $('.m_menu>.m_gnb>li').click(function(){
        $(this).toggleClass('on');
        $(this).siblings().removeClass('on');
        $(this).children().next().slideToggle().parent().siblings().find('.depth2').slideUp();
    });
    $(window).resize(function(){
        var num = $(this).width();
        console.log(num);
        if(num <= 652){
            $('main .visual .slick-prev, main .visual .slick-next').hide();
        }else{
            $('main .visual .slick-prev, main .visual .slick-next').show();
        }
        // slick next, slick prev 버튼 숨기기

        if(num <= 652){
            $('main .visual .visual1 img').attr('src', 'images/m_visual_a.jpg');
            $('main .visual .visual2 img').attr('src', 'images/m_visual_b.jpg');
            $('main .visual .slick-prev,main .visual .slick-next').hide()
        }else{
            $('main .visual .visual1 img').attr('src', 'images/visual_a.jpg');
            $('main .visual .visual2 img').attr('src', 'images/visual_b.jpg');
            $('main .visual .slick-prev,main .visual .slick-next').show()

        }
        // main visual 변경

        if(num <= 652){
            $('main .section1 .main_img .li1 img').attr('src', 'images/m_catalogue.jpg');
            $('main .section1 .main_img .li2 img').attr('src', 'images/m_video.jpg');
            $('main .section1 .main_img .li3 img').attr('src', 'images/m_product.jpg');
            $('main .section1 .main_img .li4 img').attr('src', 'images/m_athletic.jpg');
            $('main .section1 .main_img .li5 img').attr('src', 'images/m_camping.jpg');
            
        }
    });
    $('.m_btn').click(function(){
        $('.cover').fadeIn(200);
        $('.m_menu').animate({'left':0},300);
        $('body,html').css('overflow','hidden')  ;
      });
      $('.cover').click(function(){
        $('.cover').fadeOut(200);
        $('.m_menu').animate({'left':'-100%'},300);
        $('body,html').css('overflow','auto');
      });

  
});