// ;!function($){
// 	//banner数据
// 	$.ajax({
// 		url:'php/banner.php',
// 		dataType:'json'
// 	}).done(function(bannerdata){
// 		$.each(bannerdata,function(index,value){
// 			var $bannerstr='<ul>';

// 		});
// 	});

// 	//lunbo数据
// 	$.ajax({
// 		url:'php/banner.php',
// 		dataType:'json'
// 	}).done(function(bannerdata){
// 		$.each(bannerdata,function(index,value){
// 			var $bannerstr='<ul>';

// 		});
// 	});
// 	//tab切换数据
// 	$.ajax({
// 		url:'php/banner.php',
// 		dataType:'json'
// 	}).done(function(bannerdata){
// 		$.each(bannerdata,function(index,value){
// 			var $bannerstr='<ul>';

// 		});
// 	});
// }(jQuery);

!function () {
	//banner效果

}(jQuery);

!function () {
	//lunbo效果

}(jQuery);

!function () {
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
}(jQuery);

!function () {
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

!function () {
	//小效果

}(jQuery);
