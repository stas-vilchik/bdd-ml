{
  var e = t.props;

  if (e) {
    var n,
      r,
      i = {};
    if (Array.isArray(e))
      for (n = e.length; n--; )
        "string" == typeof (r = e[n]) &&
          (i[bi(r)] = {
            type: null
          });
    else if (a(e))
      for (var o in e)
        (r = e[o]),
          (i[bi(o)] = a(r)
            ? r
            : {
                type: r
              });
    t.props = i;
  }
}
