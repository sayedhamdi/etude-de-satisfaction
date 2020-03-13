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

  