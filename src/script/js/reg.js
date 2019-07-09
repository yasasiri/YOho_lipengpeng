;
! function ($) {
    //验证用户名
    $('#name').on('blur ', function () {
        $.ajax({
            url: 'http://10.31.158.25/1905/YOho_lipengpeng/php/biaoming.php',
            data: {
                name: $('#name').val()
            }
        }).done(function (d) {
            if (!d) {
                $('.name-tip').html('可以使用').css({
                    color: 'green'
                })
            } else {
                $('.name-tip').html('已经存在').css({
                    color: 'red'
                })
            }
        });
    });
    //判断是内容
    const name = $('#name')
    const nametip = $('.name-tip')
    const email = $('#email')
    const emailtip = $('.email-tip')
    const phone = $('#phone')
    const phonetip = $('.phone-tip')
    const pwd = $('#pwd')
    const pwdtip = $('.pwd-intensity-container')
    let nam = /^\w{4,20}$/;
    let emai = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    let pw = /^\w{6,20}$/;
    let ph = /^[1]\d{10,10}$/;

    let sum = /\d+/
    let str = /[a-z]+/
    let upstr = /[A-Z]+/
    let special = / \W+ | \_+/

    let namefg = false
    let emailfg = false
    let passfg = false
    let passfg2 = false
    let phonefg = false
    name.on('keyup', function () {
        if (nam.test(name.val()) === false) {
            nametip.html('请输入长度只能4~20位的字符').css({
                color: 'red'
            })
            namefg = false
        } else {
            nametip.html('输入正确').css({
                color: 'green'
            })
            namefg = true
        }
    })
    email.on('keyup', function () {
        if (emai.test(email.val()) === false) {
            emailtip.html('请正确的邮箱').css({
                color: 'red'
            })
            emailfg = false
        } else {
            emailtip.html('输入正确').css({
                color: 'green'
            })
            emailfg = true
        }
    })
    phone.on('keyup', function () {
        if (ph.test(phone.val()) === false) {
            phonetip.html('请正确的手机号').css({
                color: 'red'
            })
            phonefg = false
        } else {
            phonetip.html('输入正确').css({
                color: 'green'
            })
            phonefg = true
        }
    })
    pwd.hover(function () {
        $('.pwd-tips').removeClass('hide')

    }, function () {
        $('.pwd-tips').addClass('hide')
        // out
    });
    pwd.on('blur',function(){
        if(pw.test(pwd.val())){
            passfg = true
        }else{
            passfg = false
        }
    })
    pwd.on('keyup', function () {
        let det = 0

        if (sum.test(pwd.val())) {
            det++
        }
        if (str.test(pwd.val())) {
            det++
        }
        if (upstr.test(pwd.val())) {
            det++
        }

        switch (det) {
            case 1:
                $('.pwd-intensity-container').addClass('red')
                $('.low').addClass('color')
                passfg2=false
                break
            case 2:
                $('.pwd-intensity-container').addClass('yellow')
                $('.low').addClass('color')
                $('.mid').addClass('color')
                passfg2=true
                break
            case 3:
                $('.pwd-intensity-container').addClass('green')
                $('.low').addClass('color')
                $('.mid').addClass('color')
                $('.high').addClass('color')
                passfg2=true
                break
        }
    })
    $('#register-btn').on('mouseover',function(){
        if (namefg && emailfg && phonefg && passfg&&passfg2) {
            $('#register-btn').removeClass('disable')
            $('#register-btn').on('click',function(){
                $.ajax({
                    type: "POST",
                    url: "http://10.31.158.25/1905/YOho_lipengpeng/php/reg.php",
                    data: {
                        name:name.val(),
                        email:email.val(),
                        pwd:pwd.val()
                    },
                    }).done(function(d){
                        $('body').html(d)
                    })
            })
        }else{
            $('#register-btn').addClass('disable')
        }
    })
   
}(jQuery)