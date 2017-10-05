{
  if (kind === str) {
    return lex();
  }

  throw syntaxError(
    "Expected " + str + " but got " + string.slice(start, end) + "."
  );
}
