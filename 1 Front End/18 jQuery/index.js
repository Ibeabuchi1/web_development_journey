// $("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title margin-50");

$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("h1").css("color", "purple");
});

$("input").keypress(function (event) {
  console.log(event.key);
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});
$("button").on("click", function () {
  $("h1").fadeToggle();
});
