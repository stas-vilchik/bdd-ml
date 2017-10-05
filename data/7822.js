{
  if (!object) {
    object = {};
  }

  var elapsed = Math.random() * 15;
  object.elapsed = elapsed;
  object.formatElapsed = formatElapsed(elapsed);
  object.elapsedClassName = getElapsedClassName(elapsed);
  object.query = "SELECT blah FROM something";
  object.waiting = Math.random() < 0.5;

  if (Math.random() < 0.2) {
    object.query = "<IDLE> in transaction";
  }

  if (Math.random() < 0.1) {
    object.query = "vacuum";
  }

  return object;
}
