{
  try {
    try {
      yield 1;
    } finally {
      try {
        throw 2;
      } catch (e) {}
    }

    return 3;
  } finally {
    return 4;
  }
}