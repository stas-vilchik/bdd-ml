{
  var r = e ? "nativeOn:{" : "on:{";

  for (var i in t) {
    var o = t[i];
    r += '"' + i + '":' + Hr(i, o) + ",";
  }

  return r.slice(0, -1) + "}";
}
