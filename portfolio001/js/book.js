$(document).ready(function(){
    winW = $(window).width();
    
    /*찜하기 선호하기 이미지 바꾸기*/
    $('.i-want').find('button').click(function(){
       if($(this).find('img').attr('src').match(/black/)){
           $(this).find('img').attr('src',$(this).find('img').attr('src').replace('_black.png','.png'));
       }else{
           $(this).find('img').attr('src',$(this).find('img').attr('src').replace('.png','_black.png'));
       }           
    })
    $('.i-like').find('button').click(function(){
       if($(this).find('img').attr('src').match(/black/)){
           $(this).find('img').attr('src',$(this).find('img').attr('src').replace('_black.png','.png'));
       }else{
           $(this).find('img').attr('src',$(this).find('img').attr('src').replace('.png','_black.png'));
       }           
    })
    
    /*리뷰 평점 이미지 바꾸기*/
    $('.r-star').find('img').click(function(){
        var nowNum = $(this).index();        
        /*점수 숫자 기입*/
        $('.your-score').find('span').text(nowNum+1)        
        /*점수 매기기*/
        $('.r-star').find('img').attr('src',"img/heart-null.png")
        for(var i=0; i<=nowNum; i++) {
            $('.r-star').find('img').eq(i).attr('src',$('.r-star').find('img').eq(i).attr('src').replace('-null','-full'))
        }
    })
    
    $(window).resize(function(){
        winW = $(window).width();
        
    })
})