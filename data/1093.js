{
  return (
    ((function() {
      throw new Error('"c" is read-only');
    })(),
    ++c) + --a
  );
}
