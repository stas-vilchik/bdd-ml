{
  if (isNaN(val)) {
    assert.isTrue(isNaN(val2));
  } else {
    assert.equal(val, val2);
  }

  assert.equal(obj, t);
  assert.equal(this, context);
  arr.push(val);
  cnt++;
}
