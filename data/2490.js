{
  if (cnt === 0) {
    t.set("foo", 42);
  }

  assert.equal(map, t);
  arrKeys.push(key);
  arr.push(value);
  cnt++;
}
