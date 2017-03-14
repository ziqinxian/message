/**
 * Created by dell on 2017/3/12.
 */
$(".compiler").find("h3").on("click",function(){
    if($(this).attr("id")=='tit'){
        $(this).text("完成");
        $(this).attr('id','panel-tit');
        $(".compiler").find("i").show();
        $(".add").show();
    }else{
        $(this).text("编辑");
        $(this).attr('id','tit');
        $(".compiler").find("i").hide();
        $(".add").hide();
    }

});

$(".add").on("click",function(){
    var str=$('<span>微博加v <i>x</i></span>');
    $(this).before(str);
}).hide();

$(".compiler").find(".panel-body").on("click",'span i',function(){
    $(this).parent().remove()
}).find('i').hide();





