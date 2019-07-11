;
! function ($) {
	class banner {
		constructor() {
			this.banner = $('.slide-wrapper');
			this.baimg = $('.slide-wrapper li')
			this.thumb = $('.thumb-pagination li')
			this.left = $('.slide-switch .prev')
			this.right = $('.slide-switch .next')
			this.num = 0
			this.timer = ''
		}
		init() {
			let Is = this
			this.thumb.on('mouseover', function () {
				Is.num = $(this).index()
				Is.mover(Is.num)
				// console.log($(this).index())
			})
			this.left.on('click', function () {
				Is.num--
				if (Is.num < 0) {
					Is.num = Is.thumb.length - 1
				}
				Is.mover(Is.num)
			})
			this.right.on('click', function () {
				Is.num++
				if (Is.num > Is.thumb.length - 1) {
					Is.num = 0
				}
				Is.mover(Is.num)
			})
			$('.thumb-pagination').hover(
				function () {
					clearInterval(Is.timer)
				},
				function () {
					Is.autoplay()
				}
			)
			$('#slider').hover(function () {
				$('.slide-switch').removeClass('hide').addClass('show')
				clearInterval(Is.timer)
			}, function () {
				$('.slide-switch').removeClass('show').addClass('hide')
				Is.autoplay()
			});
			this.autoplay()
		}
		mover(num) {
			let Is = this
			this.baimg.eq(num).addClass('banner-mark').siblings().removeClass('banner-mark')
		}
		autoplay() {
			let Is = this
			clearInterval(Is.timer)
			this.timer = setInterval(function () {
				Is.right.click()
			}, 2000)
		}
	}
	new banner().init()
}(jQuery);
! function ($) {
	//用户名
	if ($.cookie('username')) {
		// let name=$.cookie('username','lisi',{expires:7});
		let name = $.cookie('username');
		$('#loginBox').html(` <span class="hi">Hi~${name}</span>
        [ <a id="out-url" href="javascript:;" class="loginout">退出</a> ]`)
	}
	$('.loginout').on('click', function () {
		if(confirm('是否退出账号')){$.cookie('username', '', { expires: -1 });
			location.reload()}
	})
}(jQuery);
! function ($) {
	onhide('.icon-del', 'click', '.code-down-box')
	onhide('.close', 'click', '#cover')

	function onhide(ele, event, ele2) {
		$(ele).on(event, function () {
			$(ele2).hide()
		})
	}
	let $liu = $('.contain-third').has('.third-nav-wrapper')
	// console.log($liu)
	$liu.children('a').on('click', function (e) {
		if (this == e.target) {
			// console.log(this)
			if ($(this).next('.third-nav-wrapper').is(':hidden')) {
				$('.contain-third').children('.third-nav-wrapper').hide()
				$(this).next('.third-nav-wrapper').show()
			} else {
				$(this).next('.third-nav-wrapper').hide()
			}
		}
	})
}(jQuery);
! function ($) {
	let $id = location.search.split('=')[1]
	$.ajax({
		type: "GET",
		url: "http://10.31.158.25/1905/YOho_lipengpeng/php/details.php",
		data: {
			id: $id
		},
		dataType: "JSON"
	}).done(function (d) {
		$('.img-show').attr('src', d[0].pictrue).attr('alt', d[0].title)
		$('#big').attr('src', d[0].pictrue)
		$('.pull-right .name').html(d[0].title)
		$('.price-row .has-other-price').html('￥' + d[0].Oprice)
		$('.promotion-price .price').html('￥' + d[0].price)
		$('.desc .promotion').html(((d[0].price / d[0].Oprice) * 10).toFixed(2) + '折')
		let $num = d[0].image.split(',')
		let sum = ''
		$($num).each(function (index, ele) {
			sum += `<div class="thumb-wrap">
			<img class="thumb active"
				src="${$num[index]}"
				alt="${d[0].title}"
			>
		</div>`
		})
		$('#thumbs').html(sum)
		let $snum = d[0].style.split(',')
		let ssum = ''
		$($snum).each(function (index, ele) {
			ssum += `<li class="pull-left" title="${d[0].title} ${$snum[index]}" data-color="${$snum[index]}" data-total="15">
			<span class="color-name">${$snum[index]}</span>
			</li>`
		})
		$('#type-chose .colors').html(ssum)
	})
}(jQuery);
! function ($) {
	//放大镜效果
	$('#min-img').hover(function () {
		// over
		$('#min-img .move-object').removeClass('hide')
		$('#max').removeClass('hide')
		let $width = $('#min-img .move-object').width() / $('#img-show').width() * $('#big').width()
		let $height = $('#min-img .move-object').height() / $('#img-show').height() * $('#big').height()
		$('#max').css({
			width: $width,
			height: $height
		})
		$('#min-img').on('mousemove', function (e) {
			let x = e.pageX - $('#min-img').offset().left - $('#min-img .move-object').width() / 2
			let y = e.pageY - $('#min-img').offset().top - $('#min-img .move-object').height() / 2

			if (x < 0) {
				x = 0
			}
			if (x > $('#img-show').width() - $('#min-img .move-object').width() - 2) {
				x = $('#img-show').width() - $('#min-img .move-object').width() - 2
			}
			if (y < 0) {
				y = 0
			}
			if (y > $('#img-show').height() - $('#min-img .move-object').height() - 2) {
				y = $('#img-show').height() - $('#min-img .move-object').height() - 2
			}
			$('#min-img .move-object').css({
				left: x,
				top: y
			})
			$('#big').css({
				left: -x / $('#img-show').width() * $('#big').width(),
				top: -y / $('#img-show').height() * $('#big').height()
			})

		})

	}, function () {
		// out
		$('#min-img .move-object').addClass('hide')
		$('#max').addClass('hide')
	});

}(jQuery);
! function ($) {
	//图片 切换效果
	$('#thumbs').on('mouseover', function () {
		$(this).find('.thumb').on('click', function () {
			$('.img-show').attr('src', this.src)
			$('#big').attr('src', this.src)
		})
	})
}(jQuery);
! function ($) {
	//数量
	let num = parseInt($('#num').html())
	$('#minus-num').on('click', function () {
		num--
		if (num < 0) {
			num = 0
		}
		$('#num').html(num)
	})
	$('#plus-num').on('click', function () {
		num++
		$('#num').html(num)
	})
	//加购物车
	let arrsid = []
    let arrnum = []
	$('#add-to-cart').on('click', function () {
		let $id = location.search.split('=')[1]
		let $num = parseInt($('#num').html())
		if ($.cookie('id') && $.cookie('num')) {
			arrsid = $.cookie('id').split(','); 
			
			//将获取的cookie转换成数组
			
			arrnum = $.cookie('num').split(',');
		}
		if (arrsid.indexOf($id) == -1) {
			arrsid.push($id)
			arrnum.push($num)
			$.cookie('id', arrsid.toString())
			$.cookie('num', arrnum.toString())
		} else {
			let id = arrsid.indexOf($id)
			arrnum[id] = +arrnum[id] + +$num
			$.cookie('num', arrnum.toString())

		}
		$('.product-detail-page .main .balance').css({
			display:'block'
		})
	})
	$('#keep-shopping').on('click',function(){
		$('.product-detail-page .main .balance').css({
			display:'none'
	})
	})
}(jQuery);

