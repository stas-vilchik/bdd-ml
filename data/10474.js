{
  if (t) {
    for (
      var n = Object.create(null),
        r = Cr
          ? Reflect.ownKeys(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })
          : Object.keys(t),
        o = 0;
      o < r.length;
      o++
    )
      for (var i = r[o], a = t[i], s = e; s; ) {
        if (s._provided && a in s._provided) {
          n[i] = s._provided[a];
          break;
        }

        s = s.$parent;
      }

    return n;
  }
}
