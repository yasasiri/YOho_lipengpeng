;
! function ($) {
    let id = $.cookie('id').split(',');
    let num = $.cookie('num').split(',')
    let sum = ''
    $(id).each(function (i) {
        cart(id[i],num[i])
    })
    function cart(id,j) {
        $.ajax({
            type: "GET",
            url: "http://10.31.158.25/1905/YOho_lipengpeng/php/details.php",
            data: {
                id: id
            },
            dataType: "JSON"
        }).done(function (d) {
            sum += `
            <li class="pre-sell-box tr active">
                <div class="pay-pro td " style="width: 368px;">
                    <i class="cart-item-check iconfont "checked=""></i>
                    <!-- 回到详情页部分 -->
                    <a class="pay-pro-icon" href="./details?id=${d[0].id}" target="_blank">
                        <!-- 图片显示部分 -->
                        <img src="${d[0].pictrue}">
                    </a>
                    <p class="pay-pro-info">
                        <!-- 回到详情部分 -->
                        <a href="./details?id=${d[0].id}" target="_blank" >
                            <!-- 产品标题 -->
                            ${d[0].title}
                        </a>
                    </p>
                </div>
                <div class="product-price td " style="width:148px;">
                <!-- 产品价格部分 -->
                    <p class="p-product-price">¥${d[0].price}</p>
                </div>
                <div style="width:128px;" class="adjust-cart-num td">
                    <div class="cart-num-cont" data-num="${d[0].id}">
                        <span class="minus cart-num-btn disabled">
                            <!-- 产品减少部分 -->
                            <i class="jianjian"> - </i>
                        </span>
                        <!-- 产品数量部分 -->
                        <input type="text" value="${j}" readonly="readonly">
                        <span class="plus cart-num-btn ">
                            <!-- 产品加购部分 -->
                            <i class="jiajia"> + </i>
                        </span>
                    </div>
                </div>
                <div style="width:160px;" class="sub-total red td">
                    ¥${parseInt(d[0].price)*j}.00
                </div>
                <div style="width:100px;" class="cart-operation td">
                    <span class="cart-del-btn">删除</span>
                </div>
            </li>
            `
            // console.log(sum)
            $('.cart-table .table').html(sum)
        })
        
        
    }

}(jQuery)
;!function($){
    //删除
    $('.table.table-group').on('click','.cart-del-btn',function(){
        // $('.cart-del-btn').on('click',function(){
            console.log(this)
        // })
    })
    //修改数量
    let num=''
    //--
    $('.table.table-group').on('click','.minus',function(){
            num = $(this).next().val()
            num--
            if(num<1){
                $('.minus').addClass('disabled')
                num=1
            }else{
                $('.minus').removeClass('disabled')
            }
            $(this).next().val(num)
            // $(this).parent().parent().next('.sub-total').html()=`¥${parseInt()}`
            let ja=($(this).parent().parent().prev().html()).replace(/[^0-9]/ig,"")/100
            $(this).parent().parent().next().html('¥'+ja*num)
            // console.log(parseInt($('.p-product-price').html())*num)
            coki($(this).parent().attr('data-num'),num)

        
    })
    //++
    $('.table.table-group').on('click','.plus',function(){
            num = $(this).prev().val()
            num++
            if(num!=1){
                $('.minus').removeClass('disabled')
            }
            $(this).prev().val(num)
            let ja=($(this).parent().parent().prev().html()).replace(/[^0-9]/ig,"")/100
            $(this).parent().parent().next().html('¥'+ja*num)
            console.log($(this).parent().attr('data-num'),num)
            coki($(this).parent().attr('data-num'),num)

    })

    function coki(c_id,num){
        let arrsid = []
        let arrnum = []
	
		let $id = c_id
		let $num = parseInt(num)
		if ($.cookie('id') && $.cookie('num')) {
			arrsid = $.cookie('id').split(','); //将获取的cookie转换成数组
			arrnum = $.cookie('num').split(',');
		}
			let id = arrsid.indexOf($id)
			arrnum[id] = $num
			$.cookie('num', arrnum.toString())
    }
    
}(jQuery)
//全选
;!function($){
    $('.left,.fixed-option>i,.ord-sell-title>i').on('mousedown',function(){
        if($('.cart-item-check-title').is('.cart-item-checked')){
            $('.cart-item-check-title').removeClass('cart-item-checked')
            $('.cart-item-check').removeClass('cart-item-checked')            
        }else{
            $('.cart-item-check-title').addClass('cart-item-checked')
            $('.cart-item-check').addClass('cart-item-checked')
        }
        // console.log($('.cart-item-check-title').is('.cart-item-checked'))
    })
    $('.table').on('click','.cart-item-check',function(){
        if($(this).is('.cart-item-checked')){
            $(this).removeClass('cart-item-checked')
            if($('.table li').length != $('.table .cart-item-checked').length){
                // $('.cart-item-check-title').removeClass('cart-item-checked')
                $('.left>i,.ord-sell-title>i,.fixed-option>i').removeClass('cart-item-checked')
            }
        }else{
            $(this).addClass('cart-item-checked')
            if($('.table li').length == $('.table .cart-item-checked').length){
                $('.cart-item-check-title').addClass('cart-item-checked')
                $('.cart-item-check').addClass('cart-item-checked') 
            }
        }
    })
//判断产品是否全选
}(jQuery)