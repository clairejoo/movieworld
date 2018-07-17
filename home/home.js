var movies = []





$(function() {
  console.log("ready!");
});


$("#searchButton").click(function() {
  $.ajax({
    dataType: "json",
    type: 'GET',
    url: "https://www.omdbapi.com/?apikey=ff58b350&s=" + $('#inputBox').val(),
  }).done(function(response) {
    console.log(response);
  }).fail(function() {
    alert("error");
  });
})
