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
    
    
    $(window).resize(function(){
        var winW = $(window).width();
        var winH = $(window).height();
        tbackH();
        lifeH();
        lifeMove();
    })
})