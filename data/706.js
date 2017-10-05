{
  var sum = 0;
  var fulfilled = false;
  var result;
  axios
    .all([123, 456])
    .then(
      axios.spread(function(a, b) {
        sum = a + b;
        fulfilled = true;
        return "hello world";
      })
    )
    .then(function(res) {
      result = res;
    });
  setTimeout(function() {
    expect(fulfilled).toEqual(true);
    expect(sum).toEqual(123 + 456);
    expect(result).toEqual("hello world");
    done();
  }, 100);
}
