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

function validateForm1() {
    var x = document.forms["myForm"]["fname1"].value;
    if (x == "") {
        document.getElementById("demo1").innerHTML = "text";
      return false;
    }
  }

  function validateForm2() {
    var x = document.forms["myForm"]["fname2"].value;
    if (x == "") {
        document.getElementById("demo2").innerHTML = "text";
      return false;
    }
  }

  $(button).click(function(){
    validateForm1();
    validateForm2();
  });