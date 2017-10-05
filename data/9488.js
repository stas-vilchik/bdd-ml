{
  function n(n, r) {
    var i = Object.create(e),
      o = [],
      a = [];

    if (
      ((i.warn = function(t, e) {
        (e ? a : o).push(t);
      }),
      r)
    ) {
      r.modules && (i.modules = (e.modules || []).concat(r.modules)),
        r.directives &&
          (i.directives = y(Object.create(e.directives), r.directives));

      for (var s in r) "modules" !== s && "directives" !== s && (i[s] = r[s]);
    }

    var c = t(n, i);
    return (c.errors = o), (c.tips = a), c;
  }

  return {
    compile: n,
    compileToFunctions: di(n)
  };
}
