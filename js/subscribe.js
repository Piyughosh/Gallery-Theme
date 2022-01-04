function myfunction() {
  var word = document.getElementById("INPUTID");
  if (word.value.length == 0) {
    alert("input field can't be empty");
    return false;
  } else {
    alert("Thank you for Subscribe");
    word.value = "";
  }
}
