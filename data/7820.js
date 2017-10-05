{
  var className = "Query elapsed";

  if (elapsed >= 10.0) {
    className += " warn_long";
  } else if (elapsed >= 1.0) {
    className += " warn";
  } else {
    className += " short";
  }

  return className;
}
