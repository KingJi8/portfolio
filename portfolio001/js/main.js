$(document).ready(function(){
    var winW = $(window).width();   
    
    /*모든 책/메뉴의 링크*/
    $('.book').find('a').attr('href','cate01-book01.html')
    
    /*상단 슬라이드*/
    $('.slider').bxSlider({
        auto:true,
        pause:5000,
        controls:false,
        speed:700,        
    });    

    
/*테마 슬라이드*/
    
    //테마 슬라이드 넘기기 버튼
    function themeSlideReveal() {
        $('.theme').each(function(i){
            var $themeSlide = $(this).find('.theme-books');
            var $tb = $themeSlide.find('.book'),
                tbL = $tb.length,
                tbW = $('.theme-books .book').outerWidth();
            var $prev = $(this).children().find('.theme-btn-left'),
                $next = $(this).children().find('.theme-btn-right');
            var currentIndex = 0;

            function revealBook(index){
                var left = -(index*tbW);
                $themeSlide.css({transform:'translate3d('+left+'px, 0, 0)'})
            }
            $prev.click(function(){
                currentIndex--;
                if(currentIndex < 0) currentIndex = 0;
                revealBook(currentIndex);
            })
            $next.click(function(){
                currentIndex++;
                if(currentIndex+5 >= tbL && winW > 800 ) {currentIndex = tbL-5}
                else if(currentIndex+4 >= tbL && winW > 450) {currentIndex = tbL-4}
                else if(currentIndex+2 >= tbL && winW <= 450) {currentIndex = tbL-2};
                revealBook(currentIndex);
            })
        })
    }
    themeSlideReveal();
    
    /*테마 전시 책 갯수 조절*/
    function themeBookNum() {
        if(winW>800) {
            var swiper = new Swiper('.theme-books-wrap', {
                slidesPerView: 5,
                spaceBetween: '.05%',
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                  },
            });
        }else if(winW>450) {
            var swiper = new Swiper('.theme-books-wrap', {
                slidesPerView: 4,
                spaceBetween: '.05%',
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                  },
            });
        }else if(winW<=450) {
            var swiper = new Swiper('.theme-books-wrap', {
                slidesPerView: 2,
                spaceBetween: '.05%',
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                  },
            });
        }
    };
    themeBookNum();
    
    
        
    $(window).resize(function(){
        winW = $(window).width();
        
        //테마 슬라이드 넘기기 버튼
        themeSlideReveal();
        /*테마 전시 책 갯수 조절*/
        themeBookNum();
        /*윈도우창 조절시 테마 책 첫번째로 되돌아가기*/
        $('.theme-books').css({transform:'translate3d(0, 0, 0)'})
    })
    
    $(window).scroll(function(){
        
        /*테마 쇼업*/
        var winS = $(window).scrollTop();
        var winH = $(window).height();
        $('.theme').each(function(index){
            var $tNow = $('.theme').eq(index);
            var tTop = $tNow.offset().top;            
            if(winS+winH-50 >= tTop) {
                $tNow.find('.theme-box').stop().animate({top:0, opacity:1},500)
            }
        })
    })
    
    /*모든 책/메뉴의 링크*/
    $('.slider').find('a').attr('href','cate01-book01.html')
    $('.sec-btn').attr('href','category01.html')
})