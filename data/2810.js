{
  switch (val) {
    case 1:
      yield val;

    case 2:
      yield val * 2;
      break;

    case 3:
      break;

    default:
      yield val * 10;
  }

  switch (val) {
    case 1000:
      yield val;
      break;
  }

  yield val * 5;
}