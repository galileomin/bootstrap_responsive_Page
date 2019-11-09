$(function(){
    $('[data-toggle="tooltip"]').tooltip()
    var items=$(".carousel-inner .item");
    $(window).on("resize",function(){
        var width=$(window).width();
        if(width>=768){
            $(items).each(function(){
                var item=$(this);
                var imgSrc=item.data("largeImage");
                item.html($('<a href="" class="PCimg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
            })
        }else{
            $(items).each(function(){
                var item=$(this);
                var imgSrc=item.data("smallImage");
                item.html('<a href="" class="mobileImg hidden-sm hidden-md hidden-lg" ><img src="'+imgSrc+'" alt="..."></a>')
            });
        }
    }).trigger("resize")
    // 计算导航原始宽度
    var ul=$(".article .nav-tabs");
    var lis=ul.find("li");
    var totalwidth=0;
    lis.each(function(index,item){
        totalwidth=totalwidth+$(item).outerWidth(true);
    })
    ul.width(totalwidth);
    // iscroll实现滑动
    var myScroll= new IScroll(".tab_parent",{
        scrollX:true,scrollY:false
    })

}) 