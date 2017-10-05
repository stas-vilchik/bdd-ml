{
  for (var i = 0; i < segments.length; i++) {
    if (!obj) {
      return;
    }

    obj = obj[segments[i]];
  }

  return obj;
}
