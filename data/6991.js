{
  var parts = scoped.split(sep);
  scoped = parts
    .map(function(p) {
      var t = p.trim().replace(polyfillHostRe, "");

      if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
        p = t.replace(/([^:]*)(:*)(.*)/, "$1" + attrName + "$2$3");
      }

      return p;
    })
    .join(sep);
}
