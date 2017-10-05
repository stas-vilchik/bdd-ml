{
  var visibility = window.location.hash.replace(/#\/?/, "");

  if (filters[visibility]) {
    app.visibility = visibility;
  } else {
    window.location.hash = "";
    app.visibility = "all";
  }
}
