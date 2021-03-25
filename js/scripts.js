$(document).ready(function () {
  $("#example-form").submit(function (event) {
    let question1val = $("#question1").val()
    let question2val = $("#question2").val() // "Red"
    let question3val = $("#question3").val()


    let dogPersonPoints = 0;
    let kjahwdkj = 0
    let akjhkjaw = 0;

    if (question1val === "dog") {
      // do something
      dogPersonPoints += 1;
    } else if (question1val === "cat") {
      dogPersonPoint -= 1;
    }


    if (dogPersonPoints > 5) {
      $("#info-about-you").show()
      $("#info-about-you").text("You're a dog person!")
    } else if (dogPersonPoints < 5) {
      $("#info-about-you").show()
      $("#info-about-you").text("You're NOT a dog person!")
    }



    event.preventDefault()
  });
})