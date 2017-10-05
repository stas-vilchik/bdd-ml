{
  context.fillStyle = c.render();
  context.beginPath();
  context.arc(p.x, p.y, p.z, 0, 2 * Math.PI, true);
  context.closePath();
  context.fill();
}
