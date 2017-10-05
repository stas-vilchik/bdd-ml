{
  var e = t.props;

  if (e) {
    var n,
      r,
      o = {};
    if (Array.isArray(e))
      for (n = e.length; n--; )
        "string" == typeof (r = e[n]) &&
          (o[qn(r)] = {
            type: null
          });
    else if (a(e))
      for (var i in e)
        (r = e[i]),
          (o[qn(i)] = a(r)
            ? r
            : {
                type: r
              });
    t.props = o;
  }
}
