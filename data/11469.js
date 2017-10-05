{
  var stipped = exp.replace(stripStringRE, "");
  var keywordMatch = stipped.match(unaryOperatorsRE);

  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== "$") {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
        '"' +
        keywordMatch[0] +
        '" in expression ' +
        text.trim()
    );
  }

  checkExpression(exp, text, errors);
}
