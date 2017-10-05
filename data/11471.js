{
  if (typeof ident === "string" && !identRE.test(ident)) {
    errors.push(
      "invalid " + type + ' "' + ident + '" in expression: ' + text.trim()
    );
  }
}
