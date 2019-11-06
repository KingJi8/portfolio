$(document).ready(function(){
    
    /*모바일 메뉴 여닫기*/
    $('.m-open').click(function(){
        $('.m-menu').stop().animate({right:0},300)
    })
    $('.m-close').click(function(){
        $('.m-menu').stop().animate({right:'-100%'},300);
        $('.m-dropdown').stop().slideUp();
    })
    
    /*모바일 메뉴 열리기*/
    $('.m-gnb-list>li>a').click(function(){
        if($(this).parent().find('.m-dropdown').is(':hidden')){
            $('.m-dropdown').stop().slideUp();
            $('.m-gnb-list>li>a').removeClass('active');
            $(this).parent().find('.m-dropdown').stop().slideDown();
            $(this).addClass('active');
        }else{
            $('.m-dropdown').stop().slideUp();
            $('.m-gnb-list>li>a').removeClass('active');
        }
    })
    
    /*웹 서브 메뉴 열리기*/
    $('.gnb-list li').on('mouseenter', function(){
        $(this).find('.sub-m').stop().slideDown();
        $('.gnb-list').removeClass('active');
        $(this).addClass('active');
    }).on('mouseleave', function(){
        $(this).find('.sub-m').stop().slideUp();
        $(this).removeClass('active');
    })
    
    /*스크롤탑*/
    $('.goTop').click(function(){
        $('html,body').stop().animate({scrollTop:0})
    })
    $(window).scroll(function(){
        var winS = $(window).scrollTop();
        var winH = $(window).height();
        var winW = $(window).width();
        
        if(winS >= winH/2 && winW > 800) {
            $('.goTop').fadeIn();
        }else{
            $('.goTop').fadeOut();
        }
    })
})