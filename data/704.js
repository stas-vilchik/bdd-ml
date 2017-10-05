{
  var fulfilled = false;
  axios.all([true, 123]).then(function() {
    fulfilled = true;
  });
  setTimeout(function() {
    expect(fulfilled).toEqual(true);
    done();
  }, 100);
}
