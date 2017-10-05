{
  let value = "outer";
  return (function() {
    let value = "inner";
    return value;
  })();
}
