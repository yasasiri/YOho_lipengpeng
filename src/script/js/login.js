;
! function () {
    // 切换选择的登陆方式
    $('#device-bg>p').on('click', function () {
        if ($('.desktop-login').is(':hidden')) {
            $('.desktop-login').removeClass('hide')
            $('.mobile-login').addClass('hide')
        } else {
            $('.mobile-login').removeClass('hide')
            $('.desktop-login').addClass('hide')
        }
    })
    $('.switch .left').on('click', function () {
        $(this).addClass('selected').next().removeClass('selected')
        $('.password-login').removeClass('hide')
        $('.sms-login').addClass('hide')
    })
    $('.switch .right').on('click', function () {
        $(this).addClass('selected').prev().removeClass('selected')
        $('.sms-login').removeClass('hide')
        $('.password-login').addClass('hide')
    })
    $('#qrcode-hover').hover(function () {
        $('#qrcode-container').animate({
            left: 0
        },function(){
            $('#qrcode-helper').removeClass('hide')
        })
       

    }, function () {
        $('#qrcode-container').animate({
            left: 65
        })
        $('#qrcode-helper').addClass('hide')

    });
}();
! function () {
    //验证用户名并登入
    let nam = /^\w{4,20}$/;
    let email = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

    $('#login-btn').on('click', function () {
        if (email.test($('#account1').val())) {
            $.ajax({
                type: "POST",
                url: "http://10.31.158.25/1905/YOho_lipengpeng/php/log.php",
                data: {
                    email: $('#account1').val(),
                    pwd: $('#password').val()
                },
                dataType: "JSON",
            }).done(function(d){
                if(d.name){
                    $.cookie('username', d.name, { expires: 7 })
                    location.href='http://10.31.158.25/1905/YOho_lipengpeng/dist/index.html'
                }
            })
        }
        if (nam.test($('#account1').val())) {
            $.ajax({
                type: "POST",
                url: "http://10.31.158.25/1905/YOho_lipengpeng/php/log.php",
                data: {
                    name: $('#account1').val(),
                    pwd: $('#password').val()
                },
                dataType: "JSON",
            }).done(function(d){
               if(d.name){
                   $.cookie('username', d.name, { expires: 7 })
                   location.href='./index.html'
               }
            })
        }
    })
}()