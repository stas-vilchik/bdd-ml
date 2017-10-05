{
  var i = 0;

  while (i < max) {
    i++;

    if (i == continueValue) {
      continue;
    }

    if (i == breakValue) {
      break;
    }

    yield i;
  }
}