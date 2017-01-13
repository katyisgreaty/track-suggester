var whichCharacter = function (barneyq, tedq) {
  if (barneyq === "single") {
    return "Barney";
  } else if (tedq === "romance") {
    return "Ted";
  } else {
    return "Marshall";
  }
}

$(document).ready(function(){
  $(".quiz").submit(function(event){
    event.preventDefault();

    var marriedQuestion = $("input:radio[name=future]:checked").val()
    var hobbyQuestion = $("input:radio[name=hobby]:checked").val()

    $("#result").text("You are " + whichCharacter(marriedQuestion,hobbyQuestion) +"!")
  });
});
