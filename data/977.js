{
  switch (kind) {
    case "[":
      return readArr();

    case "{":
      return readObj();

    case "String":
      return lex();

    default:
      return expect("Value");
  }
}
