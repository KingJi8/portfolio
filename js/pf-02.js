$(function(){
    var long = 1000;
    var hlong = 500;
    var du = 300;
    var winW = $(window).width();
    var winH = $(window).height();
    
    /*배너 nav*/
    $('.banner a').click(function(){
        var winH = $(window).height();
        $('html,body').stop().animate({scrollTop:$(this.hash).offset().top},300)
    })
    function bannerEvent(){
        var winS = $(window).scrollTop();
        var bannerH = $('.banner').height();
        if(winS>=winH) {
            $('.banner').stop().animate({top:(winH/2)-(bannerH/2)},long*1.5);
        }else{
            $('.banner').stop().animate({top:winH*2},long*1.5);
        }
    }
    
    
    /*타이틀*/
    function titleMove() {
        var titleH = [];
        $('.contents>section').each(function(i){
            titleH[i] = $('.contents>section .s-title').eq(i).offset().top;
            $(window).scroll(function(){
                var winS = $(window).scrollTop();

                if(winS >= titleH[i]-(winH*0.75)) {
                    $('.contents>section .s-title').eq(i).parents('section').stop().animate({top:0, opacity:1},du);
                }
            })
        })
    }
    titleMove();
    
    /*section00*/
    /*스크롤 - 선 늘어나기*/
    function sec0line() {
        var winS = $(window).scrollTop();
        var sec0T = $('#sec00').offset().top;
        if (winS >= sec0T-(winH*0.75)) {
            $('.s0-line').stop().animate({width:'81%'},long,function(){
                $('.s0-cir li span').addClass('active');
                $('.s0-title').stop().animate({top:0, opacity:1},hlong);
                $('.s0-t-txts li').stop().animate({top:0, opacity:1},hlong);
            })
        }
    }
    
    /*sec01*/
    function s12H() {
        var s1personalH = $('.s1-2-personal').outerHeight();
        if(winW>480) $('.s1-2-green').outerHeight(s1personalH);
    }
    s12H();
    
    
    /*sec02*/
    /*무드보드 원형 높이*/
    function s2mcirH() {
        var s2mcirW = $('.s2-1-colors').find('li').width();
        $('.s2-1-colors').find('li').height(s2mcirW);    
    }
    s2mcirH();
    
    /*무드 보드 색상*/
    var s2mback = [];
    $('.s2-1-colors').find('li').each(function(i){
        s2mback[i] = $('.s2-1-colors').find('li').eq(i).find('.s2-1-c-code').text();
        $('.s2-1-colors').find('li').eq(i).css({background:s2mback[i]});
    })
    
    
    /*폰트 높이*/
    function s2fontH() {
        var s2fexH = $('.s2-2-examples').height();
        if(winW>640) {$('.s2-con2, .s2-con3').height(s2fexH);}
    }
    s2fontH();
    
    /*sec04*/
    /*이미지 주소 경로 바꾸기*/
    $('.s4-1-i-btn').each(function(i){
        $(this).click(function(){
            $('.s4-1-i-btn').removeClass('active');
            $(this).addClass('active');
            $('.s4-1-i-box img').attr('src','img/p2-finalimg0'+(i+1)+'.png');
        })
    })
    
    $(window).scroll(function(){
        sec0line();
        bannerEvent();
    })
    $(window).resize(function(){
        var winW = $(window).width();
        var winH = $(window).height();
                
        s12H();
        s2mcirH()
        
        $(window).scroll(function(){
            bannerEvent();
            sec0line();
        })
    })
})