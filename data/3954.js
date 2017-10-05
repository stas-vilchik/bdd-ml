{
  t = formatTime(new Date());

  if (t !== time) {
    time = t;
    S.Shape.switchShape(S.ShapeBuilder.letter(time));
  }
}
