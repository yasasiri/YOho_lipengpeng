;!function($){
	//渲染产品数据
	let sum=''	
	$.ajax({
		url:'http://10.31.158.25/1905/YOho_lipengpeng/php/hoyuo.php',
		dataType:'json'
	}).done(function(data){
		$.each(data,function(index,value){
			sum+=`<div class="good-info" data-skn="" data-from="">
			<div class="tag-container clearfix">
			</div>
			<div class="good-detail-img">
				<a class="good-thumb" href="./details.html?id=${value.id}" title="${value.title}" target="_blank">
					<img class="lazy" data-original='${value.pictrue}' alt="${value.title}">
				</a>
			</div>
			<div class="good-detail-text ">
				<a href="./details.html?id=${value.id}" target="_blank" title="${value.title}">${value.title}</a>
				<p class="brand">
					<a href="./details.html?id=${value.id}" title="${value.title}">124546789</a>
				</p>
				<p class="price vip-center">
					<span class="vip-tag vip-span">${value.price}</span><strong>更优惠</strong>
				</p>
				<div class="hideList hide">
				</div>
			</div>
		</div>`
		});
		$('.commodity-list .clearfix').html(sum)
		//图片懒加载
		$(function() {//和拼接的元素放在一起。
			$("img.lazy").lazyload({
				effect: "fadeIn"//图片显示方式
			});
		});
	});
}(jQuery);

//lunbo数据 tab效果
;!function ($) {
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
			// this.baimg.eq(num).addClass('banner-mark').siblings().removeClass('banner-mark')
			this.baimg.addClass('banner-mark')

			this.baimg.eq(num).stop().animate({
				opacity:'1'
			},1000).siblings().stop().animate({
				opacity:'0'
			},1000)
		}
		autoplay() {
			let Is = this
			clearInterval(Is.timer)
			this.timer = setInterval(function () {
				Is.right.click()
			}, 3000)
		}
	}
	new banner().init()
}(jQuery);
// 	$.ajax({
// 		url:'php/banner.php',
// 		dataType:'json'
// 	}).done(function(bannerdata){
// 		$.each(bannerdata,function(index,value){
// 			var $bannerstr='<ul>';

// 		});
// 	});
// }(jQuery);

;!function () {
	//用户名是否存在
	// $.cookie('username', 'liss', { expires: 7 })
        if($.cookie('username')){
            // let name=$.cookie('username','lisi',{expires:7});
            let name=$.cookie('username');
			$('#loginBox').html(` <span class="hi">Hi~${name}</span>
			[ <a id="out-url" href="javascript:;" class="loginout">退出</a> ]`)
		}
		$('.loginout').on('click',function(){
			if(confirm('是否退出账号')){$.cookie('username', '', { expires: -1 });
			location.reload()}
		})

}(jQuery);

! function () {
	//lunbo效果

}(jQuery);

! function () {
	//关闭小窗口
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

	// $('#slider').on('mouseover', function () {
	// 	$('.slide-switch').removeClass('hide').addClass('show')
	// });
	// $('#slider').on('mouseout', function () {
	// 	$('.slide-switch').removeClass('show').addClass('hide')
	// });

}(jQuery);

! function () {
	//懒结构
	let num = 0
	$(window).on('scroll', function (e) {
		$('.yoho-page>div').each(function (index, value) {
			if ($('.yoho-page>div').eq(index).offset().top < $(window).scrollTop() + $(window).height()) {
				$('.yoho-page>div').eq(index).css({
					'display': 'block'
					
				})
				
			}
		})
		
	})

}(jQuery);

! function () {
	//小效果

}(jQuery);
