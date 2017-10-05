{
  var object = {
    a: 0,
    b: 1,
    c: 2
  };

  for (var key in object) {
    if (key == 'a') {
      delete object.b;
      object.d = 3;
    }

    yield key;
    yield object[key];
  }
}