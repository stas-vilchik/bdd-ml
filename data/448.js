{
  var called = false;
  axios("/foo", {
    adapter: function(config) {
      called = true;
    }
  });
  setTimeout(function() {
    expect(called).toBe(true);
    done();
  }, 100);
}
