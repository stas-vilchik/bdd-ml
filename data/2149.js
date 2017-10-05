{
  var it = fn.apply(this, arguments);
  it.next();
  return it;
}
