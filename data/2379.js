{
  assert.equal(this, self);

  var g = () => {
    assert.equal(this, self);
  };

  g();

  var h = function() {
    assert.equal(this, global);
  };

  h();
}
