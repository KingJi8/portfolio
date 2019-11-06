$(function(){
    var du = 300;
    var longdu = 600;
    var hlong = 500;
    var long = 1000;
    var winW = $(window).width();
    var winH = $(window).height();
    
    /*top sec*/
    /*t-back 높이*/
    function tbackH() {
        var ttypoH = $('.t-typo-sec').outerHeight();
        var headerH = $('.header').outerHeight();
        $('.t-back').outerHeight(ttypoH+headerH);
        $('.top-section').outerHeight(ttypoH);
    }
    tbackH();
    
//    /*top sec 원형 높이*/
//    function tTcircleH() {
//        var tTCirW = $('.t-t-c-text').outerWidth();
//        $('.t-t-c-text').height(tTCirW);
//        
//        var tH = $('.t-t-c-text').outerHeight();
//        var typoH = $('.t-typo-sec').outerHeight();
//        var thTop = (typoH-tH)/2
//        $('.t-t-c-text').css({top:thTop})
//    }
//    
//    /*top 원형 속 글자*/
//    function ttctext() {
//        var tH = $('.t-t-c-text').height();
//        var tdefaultH = $('.ttc-default').height();
//        var ttctxtH = $('.t-t-c-0').height();
//        $('.t-t-c-text').find('.ttc-default').css({top:(tH-tdefaultH)/2+'px'});
//        $('.t-typo').each(function(i){
//            $(this).on('mouseenter',function(){
//                $(this).css({transition:'.6s',color:'#3cb54a',});
//                $('.t-t-c-text').find('.t-t-c-'+i).css({top:(tH/2)-(ttctxtH+3)},du);
//                $('.t-t-c-text').find('.ttc-default').stop().animate({top:(tH/2)+3,},du,function(){                    
//                    $('.t-t-c-text').find('.t-t-c-'+i).stop().animate({opacity:1},du);
//                });
//            }).on('mouseleave',function(){
//                $(this).css({transition:'.6s',color:'#ffffff',});
//                $('.t-t-c-text').find('.t-t-c-'+i).stop().animate({opacity:0,},du);
//                $('.t-t-c-text').find('.ttc-default').stop().animate({top:(tH-tdefaultH)/2,},du);
//            })
//        })
//    }
    
    /*contents*/
    /*skill 원형*/    
    function skillCir() {
        var sCirW = $('.skill').width();
        $('.skill').height(sCirW);

        var skillnum = [];
        var count = 0;
        $('.skill').each(function(i){
            skillnum[i] = $(".skill").eq(i).find(".s-num").text();
            //console.log(skillnum);
            $(window).scroll(function(){
                var winS = $(window).scrollTop();
                var sTop = $('.skillSec').offset().top;
                var s = [];
                s[i] = '0.'+skillnum[i];
                console.log(s[i])
                if(winS>=sTop-(winH*.8)) {
                    $('.skill').eq(i).find('.s-cir').stop().animate({opacity:'0.'+skillnum[i]},1500);
                }
            })
        })
    }
    skillCir();
    /*var sCirW = $('.skill').width();
    $('.skill').height(sCirW);
    
    var skillnum = [];
    var count = 0;
    $('.skill').each(function(i){
        skillnum[i] = $(".skill").eq(i).find(".s-num").text();
        //console.log(skillnum);
        $(window).scroll(function(){
            var winS = $(window).scrollTop();
            var sTop = $('.skillSec').offset().top;
            
            if(winS>=sTop-(winH*.8)) {
                var sCount = setInterval(sCir,70);
                function sCir(){
                    if(count>=skillnum[i]){
                        clearInterval(sCount);
                    }else {
                        count ++;
                        $('.skill').eq(i).find('.s-txt').css({background:'conic-gradient(#333333 0% '+count+'%, transparent '+count+'% 100%)'})
                    };
                };
                $(".skill").eq(i).find(".s-num").text(skillnum[i]);
            }
        })
    })*/
    
    /*skill box Height & skill button*/
    function skillBtn() {
        var skillH = $('.skills').outerHeight();
        if(winW<=640 && winW>480) {
            $('.s-box').height(skillH/3);
        }else{
            $('.s-box').height(skillH/2);
        }
        
        $('.s-btn').click(function(){
            if($('.s-change').text() != 'more' && winW<=640 && winW>480) {
                $('.s-change').text('more');
                $('.s-btn').find('img').css({transform:'rotate(0deg)'},du)
                $('.s-box').stop().animate({height:skillH/3},du);
            }else if($('.s-change').text() != 'more') {
                $('.s-change').text('more');
                $('.s-btn').find('img').css({transform:'rotate(0deg)'},du)
                $('.s-box').stop().animate({height:skillH/2},du);
            }else{
                $('.s-change').text('close');
                $('.s-btn').find('img').css({transform:'rotate(180deg)'},du)
                $('.s-box').stop().animate({height:skillH},du);
            }
        })        
    }
    skillBtn();
    
    /*life*/
    /*life sec 높이*/
    function lifeH() {
        var lifeH = $('.l-contents').height()
        $('.lifeSec').height(lifeH+50)
    }
    lifeH();
    
    /*life 이동*/
    function lifeMove() {
        var lconH = [];
        $('.l-con').each(function(i){
            lconH[i] = $('.l-con').eq(i).offset().top;

            $(window).scroll(function(){
                var winS = $(window).scrollTop();

                if(winS >= lconH[i]-(winH*0.8)) {
                    $('.l-con').eq(i).find('.l-c-txtbox').stop().animate({left:0, opacity:1},du);
                }
            })
        })
    }
    lifeMove();
    
    /*more about*/
    /*more 답 펴지기*/
    $('.m-question').each(function(){
        $(this).find('.m-q-question').on('click',function(){
            if($(this).hasClass('active') == false) {
                $('.m-q-answer').slideUp();
                $('.m-q-answer, .m-q-question').removeClass('active');
                $(this).next('.m-q-answer').slideDown(du);
                $(this).next('.m-q-answer').addClass('active');
                $(this).addClass('active');
            }else {
                $('.m-q-answer').slideUp();
                $('.m-q-answer, .m-q-question').removeClass('active');
            }
            
        })
    })
    
    
    
    
    $(window).resize(function(){
        var winW = $(window).width();
        var winH = $(window).height();
        tbackH();
        lifeH();
        lifeMove();
    })
})