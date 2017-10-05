{
  var n = 0;
  return {
    next() {
      return {
        value: n++,
        done: n > 3
      };
    }
  };
}
