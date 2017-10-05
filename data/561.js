{
  var o = {
    val: 123
  };
  var f = bind(function(num) {
    return this.val * num;
  }, o);
  expect(f(2)).toEqual(246);
}
