{
  var i = filter.indexOf("(");

  if (i < 0) {
    return '_f("' + filter + '")(' + exp + ")";
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return '_f("' + name + '")(' + exp + "," + args;
  }
}
