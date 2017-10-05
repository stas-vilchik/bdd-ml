{
  var startAngle = this.props.startAngle;
  var endAngle = this.props.endAngle;

  if (startAngle - endAngle === 0) {
    return;
  }

  var innerRadius = this.props.innerRadius || 0;
  var outerRadius = this.props.outerRadius;
  var ir = Math.min(innerRadius, outerRadius);
  var or = Math.max(innerRadius, outerRadius);
  var path;

  if (endAngle >= startAngle + 360) {
    path = this._createCirclePath(or, ir);
  } else {
    path = this._createArcPath(startAngle, endAngle, or, ir);
  }

  return React.createElement(
    Shape,
    _extends({}, this.props, {
      d: path
    })
  );
}
