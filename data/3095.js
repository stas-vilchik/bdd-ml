{
  var i = d.id.lastIndexOf(".");
  return i >= 0 ? d.id.slice(0, i) : null;
}
