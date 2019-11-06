$(document).ready(function(){
    var winW = $(window).width();
    
    /*상단 이미지 제목 위치*/
    function slideImgTitle(){
        var simgH = $('.s-img-box').height();
        $('.s-img-txt').css({height:simgH});
    }
    slideImgTitle();
    
    /*콘텐츠 전체 margin-top*/
    function contentsMarginT(){
        var headerH = $('.header').height();
        var sliderH = $('.slideSec').height();
        if(winW>800){
            $('.contents').css({'margin-top':sliderH-headerH});
        }else{
            $('.contents').css({'margin-top':0})
        }
    }
    contentsMarginT();
    
    /*카테고리 네비표기 + 카테고리별 탭 변환*/
    var cateTxt = $('.c-title').text();
    $('.c-nav-cate').children().text(cateTxt);    
    $('.c-category li').each(function(index){
        $(this).click(function(){
            /*카테고리 색상 변환*/
            $('.c-category li').children().removeClass('active');
            $(this).children().addClass('active');
            /*네비 표기*/
            var text = $(this).children().text();
            $('.c-nav-now').children().text(text);
            /*탭 변환*/
            $('.c-cate-tabs').css({'z-index':-1,'height':'0'});
            $('.c-cate-tabs').eq(index).css({'z-index':100,'height':'auto'});
        })
    }).filter(':first').click()
    
    /*탭 높이 설정*/
    function contentTabH(){
        var tabH = $('.tab').first().outerHeight();
        var winW = $(window).width();
        if(winW>800) {
            $('.tabs').css({height:tabH})
        }else{
            $('.tabs').css({height:'auto'})
        }
    }
    contentTabH();
    
    /*pagination*/
    var z = 1;
    function pagination(){
        if(winW>800) {
            $('.c-cate-tabs').each(function(index){
                $(this).find('.c-pages button').each(function(index){
                    $(this).click(function(){
                        
                        //$(this).parents('.c-cate-tabs').find('.tab').css({'z-index':100})
                        if($(this).hasClass('active')) {
                            
                        }else{
                            $(this).parents('.c-cate-tabs').find('.tab').eq(index).css({left:'100%','z-index':z+1});
                        $(this).parents('.c-cate-tabs').find('.tab').eq(index).animate({left:'0%'},300,);
                        z = z+1;
                        }
                        
                        /*클릭 버튼 활성화*/
                        $(this).parents('.c-cate-tabs').find('.c-pages button').removeClass('active');
                        $(this).addClass('active');
                        
                    })
                }).filter(':first').click();
            })
        }
    }
    pagination();
    
    
    
    $(window).scroll(function(){
        
    });
    
    $(window).resize(function(){
        winW = $(window).width();
        var tabH = $('.tab').outerHeight();
        //console.log(tabH);
        
        /*상단 이미지 제목 위치*/
        slideImgTitle();
        /*콘텐츠 전체 margin-top*/
        contentsMarginT();
        /*탭 높이 설정*/
        contentTabH();
        
        pagination();
    })
})