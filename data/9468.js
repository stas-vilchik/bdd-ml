{
  var e = t[0].replace(Ua, "\\$&"),
    n = t[1].replace(Ua, "\\$&");
  return new RegExp(e + "((?:.|\\n)+?)" + n, "g");
}
