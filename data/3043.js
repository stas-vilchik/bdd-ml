{
  return (
    Math.abs(a.r - b.r) < 1e-6 &&
    Math.abs(a.x - b.x) < 1e-6 &&
    Math.abs(a.y - b.y) < 1e-6
  );
}
