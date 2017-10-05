{
  if (t) {
    for (
      var n = Object.create(null),
        r = Gi
          ? Reflect.ownKeys(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })
          : Object.keys(t),
        i = 0;
      i < r.length;
      i++
    )
      for (var o = r[i], a = t[o], s = e; s; ) {
        if (s._provided && a in s._provided) {
          n[o] = s._provided[a];
          break;
        }

        s = s.$parent;
      }

    return n;
  }
}
