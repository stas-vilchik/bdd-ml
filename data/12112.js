{
  var result = parseText(name, options.delimiters);

  if (result) {
    dynamic = true;
    return result.expression;
  }

  return JSON.stringify(name);
}
