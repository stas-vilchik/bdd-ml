{
  if (degrees !== 0 && degrees % 360 === 0) {
    return this.circleRadians;
  } else {
    return (degrees * this.radiansPerDegree) % this.circleRadians;
  }
}
