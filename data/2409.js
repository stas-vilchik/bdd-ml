{
  var value = await asyncComplete();
  assert.equal('complete', value);
  done();
}