{
  var src = elt;
  elt = cloneStyle(elt);
  elt.__importElement = src;
  this.parseGeneric(elt);
}
