/**
 * Created by dell on 2017/3/12.
 */
$(".add").on("click",function(){
    var str=$('<span>΢����v <i>x</i></span>');
    //$(".compiler").find(".panel-body").append(str);
    $(this).before(str);
    //$(this).hide();
});

$(".compiler").find(".panel-body").on("click",'span i',function(){
    $(this).parent().remove()
});