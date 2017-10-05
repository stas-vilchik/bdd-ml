{
  called++;
  return function() {
    return ++i;
  };
}
