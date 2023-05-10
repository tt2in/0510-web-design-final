$(function(){
    $('.gnb').hover(
        function(){
            $('.gnb ul').stop().slideDown('fast')
        },
        function(){
            $('.gnb ul').stop().slideUp(500)
        }
    )

    setInterval(function(){
        $('.slide').animate({top:-300},function(){
            $('.slide a:first').appendTo($('.slide'))
        $('.slide').css('top',0)})
    },3000)

    $('.tab_title h2').click(function(){
        $('.tab_title h2').removeClass('on')
        $(this).addClass('on')
        $('.tab_contents ul').css('display','none')
        $('.tab_contents ul').eq($(this).index()).css('display','block')
    })

    $('.notice li:first').click(function(){
        $('#modal').addClass('active')
    })
    $('#modal .close').click(function(){
        $('#modal').removeClass('active')
    })
})

// index 파일에서 js 작성할때는 <scrip></script>에
// 바로 원하는 부분부터 작성해주면 된다. 하지만,
// js 파일을 따로 작성할 때 무조건 $(function)(){~}
// 안에 작성한 코드들을 넣어주면 된다