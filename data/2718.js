{
  var object = {
    a: 0,
    b: {
      c: 1
    },
    d: 2
  };

  for (var key in object) {
    yield key;

    for (var key2 in object[key]) {
      yield key2;
    }
  }
}