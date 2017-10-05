{
  try {
    return new Function(t);
  } catch (n) {
    return (
      e.push({
        err: n,
        code: t
      }),
      _
    );
  }
}
