{
  var countClassName = "label";

  if (queries >= 20) {
    countClassName += " label-important";
  } else if (queries >= 10) {
    countClassName += " label-warning";
  } else {
    countClassName += " label-success";
  }

  return countClassName;
}
