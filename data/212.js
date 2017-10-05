{
  var u = [];
  u.push(e + "=" + encodeURIComponent(t)),
    r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()),
    r.isString(o) && u.push("path=" + o),
    r.isString(i) && u.push("domain=" + i),
    s === !0 && u.push("secure"),
    (document.cookie = u.join("; "));
}
