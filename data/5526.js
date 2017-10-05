{
  var path = Path();

  var sa = this._degreesToRadians(startAngle);

  var ea = this._degreesToRadians(endAngle);

  var ca = sa > ea ? this.circleRadians - sa + ea : ea - sa;
  var ss = Math.sin(sa);
  var es = Math.sin(ea);
  var sc = Math.cos(sa);
  var ec = Math.cos(ea);
  var ds = es - ss;
  var dc = ec - sc;
  var dr = ir - or;
  var large = ca > Math.PI;
  path
    .move(or + or * ss, or - or * sc)
    .arc(or * ds, or * -dc, or, or, large)
    .line(dr * es, dr * -ec);

  if (ir) {
    path.counterArc(ir * -ds, ir * dc, ir, ir, large);
  }

  return path;
}
