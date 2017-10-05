{
  var text = e[0] && String.raw(...e);

  if (this instanceof tag) {
    log.push("new;" + text);
  } else {
    log.push("tag;" + text);
    return tag;
  }
}
