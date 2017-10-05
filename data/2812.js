{
  switch (yield x) {
    case 1:
      return 1;

    case 2:
      return 2;

    default:
      return 3;
  }

  throw new Error('Unreachable');
}