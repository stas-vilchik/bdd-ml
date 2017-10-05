{
  try {
    new Function("return " + exp);
  } catch (e) {
    var keywordMatch = exp
      .replace(stripStringRE, "")
      .match(prohibitedKeywordRE);

    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
          '"' +
          keywordMatch[0] +
          '" in expression ' +
          text.trim()
      );
    } else {
      errors.push("invalid expression: " + text.trim());
    }
  }
}
