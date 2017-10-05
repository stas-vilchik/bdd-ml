{
  var open = delimiters[0].replace(regexEscapeRE, "\\$&");
  var close = delimiters[1].replace(regexEscapeRE, "\\$&");
  return new RegExp(open + "((?:.|\\n)+?)" + close, "g");
}
