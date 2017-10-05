{
  var self = this;
  [1, 2, 3].find(function() {
    assert.notEqual(this, self);
    assert.equal(this, global);
  });
  [1, 2, 3].find(function() {
    assert.equal(this, self);
  }, self);
  [1, 2, 3].find(() => assert.equal(this, self));
  [1, 2, 3].find(() => assert.equal(this, self), self);
  var arr = [5];
  arr.find(function(value, i, object) {
    assert.equal(value, 5);
    assert.equal(i, 0);
    assert.equal(arr, object);
  });
}
