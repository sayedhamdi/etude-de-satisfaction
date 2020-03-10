$(".p1").hide();
$(".p2").hide();
$(".p3").hide();
$(".p4").hide();
$(".hovreha1").hover(function(){
    $(".p1").toggle();
    $(".hovreha1").animate({
        fontSize: "70px"
    }, 1000);
});
$(".hovreha2").hover(function(){
    $(".p2").toggle();
});
$(".hovreha3").hover(function(){
    $(".p3").toggle();
});
$(".hovreha4").hover(function(){
    $(".p4").toggle();
});
