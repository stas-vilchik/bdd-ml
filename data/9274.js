{
  var e = t.match(ts);

  if (e) {
    var r = {
      tagName: e[1],
      attrs: [],
      start: l
    };
    n(e[0].length);

    for (var i, o; !(i = t.match(es)) && (o = t.match(Ya)); )
      n(o[0].length), r.attrs.push(o);

    if (i) return (r.unarySlash = i[1]), n(i[0].length), (r.end = l), r;
  }
}
