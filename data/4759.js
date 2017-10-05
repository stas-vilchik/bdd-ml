{
  var r = this.next();

  if (typeof r !== "undefined") {
    return r;
  } else {
    return this.lex();
  }
}
