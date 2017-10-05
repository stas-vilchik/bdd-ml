{
  if (this.done) return;
  var inner = t.ifStatement(
    t.booleanLiteral(true),
    t.expressionStatement(t.numericLiteral(42)),
    null
  );
  var outer = t.ifStatement(
    t.booleanLiteral(false),
    inner,
    t.expressionStatement(t.numericLiteral(23))
  );
  path.replaceWith(t.program([outer]));
  this.done = true;
}
