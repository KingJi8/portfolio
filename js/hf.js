$(document).ready(function(){
    var du = 300;
    var H = $('body').outerHeight();
    $('html').outerHeight(H)
    /*gnb 메뉴 하단 선*/
    $('.gnb>li>a').on('mouseenter', function(){
        $(this).find('.gnb-on').stop().animate({width:'100%'},du)
    })
    $('.gnb>li>a').on('mouseleave', function(){
        $(this).find('.gnb-off').stop().animate({width:'100%'},du)
        $(this).find('.gnb-on').delay(du).animate({width:'0%'},0)
        $(this).find('.gnb-off').delay(du).animate({width:'0%'},0)
    })
    
})