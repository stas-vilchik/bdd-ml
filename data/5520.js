{
  var radius = this.props.radius;
  var path = Path()
    .moveTo(0, -radius)
    .arc(0, radius * 2, radius)
    .arc(0, radius * -2, radius)
    .close();
  return React.createElement(
    Shape,
    _extends({}, this.props, {
      d: path
    })
  );
}
