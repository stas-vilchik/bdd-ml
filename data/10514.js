{
  Yn.forEach(function(e) {
    t[e] = function(t, n) {
      return n
        ? ("component" === e &&
            a(n) &&
            ((n.name = n.name || t), (n = this.options._base.extend(n))),
          "directive" === e &&
            "function" == typeof n &&
            (n = {
              bind: n,
              update: n
            }),
          (this.options[e + "s"][t] = n),
          n)
        : this.options[e + "s"][t];
    };
  });
}
