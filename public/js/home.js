function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

$.get("/api/get", function (data) {
  var row = JSON.stringify(data[0].name);
  $("#recipeName").text(row);
  var URL = JSON.stringify(data[0].url);
  $("#recipeURL").html("<img src=" + URL + ">");
});

$("#add-btn").on("click", function (event) {

  event.preventDefault();
  var breakfast = {
    name: $("#postTitle").val().trim(),
    url: $("#postURL").val().trim()
  };

  $.post("/api/get", breakfast).then(function (data) {

  });
  // Empty each input box by replacing the value with an empty string
  $("#postTitle").val(""); // Clear the input fields - CG added 25 Jan
  $("#postURL").val(""); // 

});

$("#next-btn").on("click", function (event) {
  event.preventDefault();

  $.get("/api/get", function (data) {

    var ran = generateRandomNumber(0, data.length);
    var row = JSON.stringify(data[ran].name);
    $("#recipeName").text(row);
    var URL = JSON.stringify(data[ran].url);
    $("#recipeURL").html("<img src=" + URL + ">");
  });

});