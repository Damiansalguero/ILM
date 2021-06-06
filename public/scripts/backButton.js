$(document).ready(function () {
  // Check if the URL parameter is apples
  if (window.location.pathname.indexOf("karriere") > -1) {
    $("#career").css("display", "block");
    $("#areas").css("display", "none");
  } else {
    $("#career").css("display", "none");
    $("#areas").css("display", "block");
  }
});
