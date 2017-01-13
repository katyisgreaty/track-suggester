var whichCharacter = function (rubyq, phpq, csharpq) {
  if (rubyq === "front") {
    return "Ruby";
  } else if (phpq === "heavy") {
    return "PHP";
  } else if (csharpq === "big") {
    return "C#";
  } else {
    return "Java";
  }
}

$(document).ready(function(){
  $(".quiz").submit(function(event){
    event.preventDefault();

    var frontOrBackQuestion = $("input:radio[name=frontorback]:checked").val()
    var contentQuestion = $("input:radio[name=content]:checked").val()
    var bigBusinessQuestion = $("input:radio[name=bigbusiness]:checked").val()

    $("#result").text("You should choose the " + whichCharacter(frontOrBackQuestion,contentQuestion,bigBusinessQuestion) +" track!" + ("#test"))
  });
});
