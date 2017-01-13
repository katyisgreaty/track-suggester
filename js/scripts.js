var whichCharacter = function (barneyq, tedq) {
  if (rubyq === "front") {
    return "Ruby";
  } else if (phpq === "heavy") {
    return "PHP";
  } else if (tedq === "romance") {
    return "Ted";
  } else {
    return "Marshall";
  }
}

$(document).ready(function(){
  $(".quiz").submit(function(event){
    event.preventDefault();

    var frontOrBackQuestion = $("input:radio[name=future]:checked").val()
    var contentQuestion = $("input:radio[name=hobby]:checked").val()
    var hobbyQuestion = $("input:radio[name=hobby]:checked").val()

    $("#result").text("You are " + whichCharacter(frontOrBackQuestion,contentQuestion,hobbyQuestion) +"!")
  });
});
