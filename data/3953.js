{
  if (index === 0) {
    if (sequence.length === 0) {
      S.Shape.switchShape(S.ShapeBuilder.letter(""));
    } else {
      performAction(sequence);
    }
  } else {
    S.Shape.switchShape(S.ShapeBuilder.letter(index), true);
  }
}
