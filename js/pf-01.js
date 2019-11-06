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
    /*그래프 높이*/
    function s1gH() {
        var s1graphW = $('.s1-g-cir').width();
        $('.s1-g-cir').height(s1graphW);    
    }
    s1gH();    
    
    /*그래프 움직이기*/
    function s1graph() {
        var s1gNum = [];
        var count = 0;
        var sec1gT = $('.s1-gbox').offset().top;
        $('.s1-gbox li').each(function(i){
            s1gNum[i] = $('.s1-gbox li').eq(i).find(".s1-g-t-num").text();
            //console.log(s1gNum)
            $(window).scroll(function(){
                var winS = $(window).scrollTop();

                if(winS>=sec1gT-(winH*0.75)) {
                    var s1Count = setInterval(sCir,10);
                    function sCir(){
                        if(count>=s1gNum[i]){
                            clearInterval(s1Count);
                        }else {
                            count ++;
                            $('.s1-gbox li').eq(i).find('.s1-g-cir').css({background:'conic-gradient(#999999 0% '+count+'%, transparent '+count+'% 100%)'})
                        };
                    };
                    $('.s1-gbox li').eq(i).find(".s1-g-t-num").text(s1gNum[i]);
                    $('.s1-1-txt').delay(hlong*2).animate({top:0, opacity:1},du);
                    $('.s1-g-txt').stop().animate({opacity:1},du);
                }
            })
        })
    }
    s1graph();
    
    /*텍스트 액션*/
    function s1bookaronTxt() {
        var winS = $(window).scrollTop();
        var sec1c2T = $('.s1-2-txt').offset().top;     
        if(winS>=sec1c2T-(winH*0.75)) {
            $('.s1-2-txt li').eq(0).stop().animate({top:0,opacity:1},hlong,function(){
                $('.s1-2-txt li').eq(1).stop().animate({top:0,opacity:1},hlong,function(){
                    $('.s1-2-txt li').eq(2).stop().animate({top:0,opacity:1},hlong,function(){
                        $('.s1-con2 h3').stop().animate({opacity:1},long)
                    })
                })    
            })
        }
    }
    
    /*타겟 이미지 옆 텍스트*/
    function s1targetIH() {
        var s1targetImgH = $('.s1-3-imgbox img').outerHeight();
        var s1targettxtH = $('.s1-3-txt').outerHeight();
        if(s1targetImgH>=s1targettxtH){
            $('.s1-3-txt').outerHeight(s1targetImgH);
        }
    }
    s1targetIH();
    
    /*con3,con4 높이별로 나타나기*/
    function sec1conshow(){
        var winS = $(window).scrollTop();
        var sec1con3H = $('.s1-con3').offset().top;
        var sec1con4H = $('.s1-con4').offset().top;
        if(winS>=sec1con3H-(winH*0.75)) {
            $('.s1-con3').stop().animate({top:0,opacity:1},long);
        }
        if(winS>=sec1con4H-(winH*0.75)) {
            $('.s1-4-p-imgbox').stop().animate({opacity:1},long);
            $('.s1-4-p-profile').find('li').eq(0).stop().animate({left:0, opacity:1},hlong,function(){
                $('.s1-4-p-profile').find('li').eq(1).stop().animate({left:0, opacity:1},hlong,function(){
                    $('.s1-4-p-profile').find('li').eq(2).stop().animate({left:0, opacity:1},hlong,function(){
                        $('.s1-4-p-profile').find('li').eq(3).stop().animate({left:0, opacity:1},hlong,function(){
                            $('.s1-4-p-profile').find('li').eq(4).stop().animate({left:0, opacity:1},hlong,function(){
                                $('.s1-4-synario').find('article').stop().animate({top:0, opacity:1},hlong);
                            });
                        });
                    });
                });
            });
        }
    }
    
    /*페르소나 텍스트 높이*/
    function s1perH() {
        var s1perImgH = $('.s1-4-p-imgbox').outerHeight();
        if(s1perImgH >= 180){$('.s1-4-p-profile').outerHeight(s1perImgH);}
    }
    s1perH();
    
    
    /*sec02*/
    /*무드보드 원형 높이*/
    function s2mcirH() {
        var s2mcirW = $('.s2-2-m-colors').find('li').width();
        $('.s2-2-m-colors').find('li').height(s2mcirW);    
    }
    s2mcirH();
    
    /*무드 보드 색상*/
    var s2mback = [];
    $('.s2-2-m-colors').find('li').each(function(i){
        s2mback[i] = $('.s2-2-m-colors').find('li').eq(i).find('.s2-2-m-c-code').text();
        $('.s2-2-m-colors').find('li').eq(i).css({background:s2mback[i]});
    })
    
    /*무드 보드 안쪽 키워드*/
    $('.s2-2-m-colors').find('li').each(function(i){
        var spanlen = $(this).find('span').length;
        //console.log(spanlen);
        if(spanlen == 3) {
            $(this).on('click', function(){
                if($(this).hasClass('active') == false) {
                    $('.s2-2-m-colors').find('li').removeClass('active');
                    $(this).addClass('active');
                    $(this).find('.s2-2-m-c-code, .s2-2-m-c-color').stop().animate({opacity:0},du)
                    $(this).find('.s2-2-m-c-keyword').delay(du).animate({opacity:1},du);
                }else{
                    $(this).removeClass('active');
                    $(this).find('.s2-2-m-c-keyword').stop().animate({opacity:0},du,function(){
                        $(this).siblings('.s2-2-m-c-code, .s2-2-m-c-color').stop().animate({opacity:1},du);
                    });
                }
            })
        }
    });
    
    /*폰트 높이*/
    function s2fontH() {
        var s2fexH = $('.s2-3-examples').height();
        if(winW>640) {$('.s2-con3').height(s2fexH);}
    }
    s2fontH();
    
    /*sec04*/
    /*이미지 주소 경로 바꾸기*/
    $('.s4-1-i-btn').each(function(i){
        $(this).click(function(){
            $('.s4-1-i-btn').removeClass('active');
            $(this).addClass('active');
            $('.s4-1-i-box img').attr('src','img/p1-finalimg0'+(i+1)+'.png');
        })
    })
    
    $(window).scroll(function(){
        s1bookaronTxt();
        sec0line();
        sec1conshow();
        bannerEvent();
    })
    $(window).resize(function(){
        var winW = $(window).width();
        var winH = $(window).height();
                
        s1gH();
        s1graph();
        s1targetIH();
        s1perH()
        s2mcirH()
        
        $(window).scroll(function(){
            bannerEvent();
            s1bookaronTxt();
            sec0line();
            sec1conshow();
        })
    })
})