$(function(){
    var du = 300;
    var long = 1000;
    var winW = $(window).width();
    var winH = $(window).height();

    /*탑 섹션*/
    /*top section 높이 조절*/
    function topH() {
        var headerH = $('.header').outerHeight();
        var topH = winH - headerH;
        $('.top-section').outerHeight(topH);
    }
    topH();
    
    /*top sec 위치 조절*/
    function topPosition() {
        var ttxtBoxH = $('.t-txt-box').height();
        $('.t-txt-box').css({'top':'calc(50% - ' +(ttxtBoxH*.6)+ 'px )'})    
    }
    topPosition();
    
    /*top Sec img/border 높이*/
    function tImgH() {
        var tImgBoxW = $('.t-img-box').width();
        $('.t-img-box').outerHeight(tImgBoxW);
        $('.t-img-border').outerHeight(tImgBoxW-50);    
    }
    tImgH();
    
    /*top sec 글자 밑줄*/
    function tTxtLine() {
        $('.t-under1').on('mouseenter',function(){
            $(this).stop().animate({'left':0, opacity:1,},du);
        }).on('mouseleave',function(){
            $(this).stop().animate({'left':'-20px', opacity:0, },du);
        })
        $('.t-under2, .t-under3').on('mouseenter',function(){
            $(this).stop().animate({'right':0, opacity:1,},du);
        }).on('mouseleave',function(){
            $(this).stop().animate({'right':'-20px', opacity:0, },du);
        })
    }
    tTxtLine();
    
    /*스크롤 시 탑섹션 이동*/
    function topScroll() {
        var contentT = $('.contents').offset().top;
        //console.log(contentT)        
        $('.top-section').on('DOMMouseScroll mousewheel', function(e){
            var moveTop = null;
            var winS = $(window).scrollTop();
            console.log(winS);
            
            if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
                console.log('휠을 올렸다');
                if(winS<=contentT) {
                    moveTop = 0;
                }
            }else{
                //console.log('휠을 내렸다');
                if(winS<contentT) {
                    moveTop = contentT;
                }
            };
            $('html,body').stop().animate({scrollTop:moveTop},500)
        });
        
        $('.scrollbox>button').click(function(){
            $('html,body').stop().animate({scrollTop:contentT},500)
        })
    }
    topScroll();
    
    
    /*포트폴리오*/
    /*포트폴리오 이미지박스 세로 사이즈*/
    function conH(){
        var cPImgW = $('.c-p-imgSec').width();
        var cPImgH = cPImgW*1.273;
        var cPtxtH = $('.c-p-txtSec').outerHeight();
        if(winW>=800 && cPImgH >= cPtxtH){
            $('.c-p-imgSec, .c-portfolio').outerHeight(cPImgH);
        }else if(winW>=800 && cPImgH<cPtxtH) {
            $('.c-p-imgSec').outerHeight(cPImgH);
            $('.c-portfolio').outerHeight(cPtxtH);
        }else if (winW<=800){
            $('.c-p-imgSec').outerHeight(cPImgH);
            $('.c-portfolio').outerHeight(cPImgH+cPtxtH);
        }
        
        var cPImgboxW = $('.c-p-imgbox').width();
        $('.c-p-imgbox').height(cPImgboxW)
    }
    conH();
    
    /*포트폴리오 check*/
    function animation() {
        $('.c-p-check').animate({'left':'10px'},500).animate({'left':'0px'},500,)
    }
    var ani = null;
    $('.c-p-check').on('mouseenter',function(){
        animation();
        ani = setInterval(animation,long)
    }).on('mouseleave',function(){
        clearInterval(ani)
    })
    
    /*포트폴리오 액션*/
    function cPAct(){
        $('.c-portfolio').each(function(i){
            var cPTop = [];
            var cPH = [];
            $(window).scroll(function(){
                cPTop[i] = $('.c-portfolio').eq(i).offset().top;
                cPH[i] = $('.c-portfolio').eq(i).height();
                var winS = $(window).scrollTop();
                console.log()
                if(winW>480 && winS>=cPTop[i] - 500) {
                    $('.c-portfolio').eq(i).find('.c-p-border').stop().animate({left:0,opacity:1},long);
                    $('.c-portfolio').eq(i).find('.c-p-img').stop().animate({top:'60px',opacity:1},long);
                }else if(winW<=480 && winS>=cPTop[i] - 500) {
                    $('.c-portfolio').eq(i).find('.c-p-border').stop().animate({left:0,opacity:1},long);
                    $('.c-portfolio').eq(i).find('.c-p-img').stop().animate({top:'30px',opacity:1},long);
                }
            })
        })
    };
    cPAct();
    
    
    /*studies*/
    /*study 요소 높이 조절*/
    function studyH() {
        var studyimgW = $('.s-imgbox').outerWidth();
        $('.s-imgbox').height(studyimgW);    
    }
    studyH();
    
    
    /*Ability*/
    /*ability 막대 높이*/
    function abEachH() {
        var aTitleH = $('.a-name').height()
        $('.a-each').height(aTitleH)    
    }
    abEachH();
    
    /*ability 막대 액션*/
    var pValTxt = [];
    $('.a-each').each(function(i){
        pValTxt[i] = $(".a-each").eq(i).find(".a-p-val").text();
        //console.log("pValTxt["+i+"] "+pValTxt[i] );
        prog();

        function prog(){
            var count = 0;
            var count1 = 0;

            $(window).scroll(function(){
                var winS=$(window).scrollTop();
                var abTop=$('#ability').offset().top;
                //console.log(abTop)
                if(winS>=abTop-winH+200) {
                    $('.a-p-val').stop().animate({opacity:1},100)
                    //$(".a-each").eq(i).find('.a-p-bar').stop().animate({width:pValTxt[i]+'%'},1500);

                    var pmove = setInterval(pPBar,10);
                    function pPBar(){
                        if(count1>=pValTxt[i]){
                            clearInterval(pPBar);
                        }else {
                            count1 ++;
                            $(".a-each").eq(i).find('.a-p-bar').stop().animate({width:count1+'%'},10);
                        };
                    }
                    
                    var pcount = setInterval(pProgress,10);
                    function pProgress(){
                        if(count>=pValTxt[i]){
                            clearInterval(pcount);
                        }else {
                            count ++;
                            $(".a-each").eq(i).find('.a-p-val').text(count+'%');
                        };
                    };
                };
            });
        };
    })
        
    /*ability more*/
    
    function aMoreAct() {
        $('.a-more').animate({right:'-3.5%'},500).animate({right:'-2.5%',},500,)
    }
    var aMAct = null
    $('.a-more').on('mouseenter',function(){
        aMoreAct();
        aMAct = setInterval(aMoreAct,long);
    }).on('mouseleave',function(){
        clearInterval(aMAct);
    })
    
    
    
    $(window).resize(function(){
        winW = $(window).width();
        winH = $(window).height();
        
        topH();
        topPosition();
        tImgH();
        topScroll();
        conH();
        cPAct();
        studyH();
    })
    
    $(window).scroll(function(){
        var winS = $(window).scrollTop();
        
        /*스크롤 클릭 시 이동*/
    })
})