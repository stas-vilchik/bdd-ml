{
  var inner = () => arguments;

  return [].slice.call(inner());
}
