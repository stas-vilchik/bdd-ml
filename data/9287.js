{
  var e = un(t, "v-if");
  if (e)
    (t.if = e),
      wr(t, {
        exp: e,
        block: t
      });
  else {
    null != un(t, "v-else") && (t.else = !0);
    var n = un(t, "v-else-if");
    n && (t.elseif = n);
  }
}
