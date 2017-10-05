{
  var path = Path();
  path
    .move(0, or)
    .arc(or * 2, 0, or)
    .arc(-or * 2, 0, or);

  if (ir) {
    path
      .move(or - ir, 0)
      .counterArc(ir * 2, 0, ir)
      .counterArc(-ir * 2, 0, ir);
  }

  path.close();
  return path;
}
