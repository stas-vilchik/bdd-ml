{
  var r = this;
  if (a(e)) return qt(r, t, e, n);
  (n = n || {}).user = !0;
  var o = new qr(r, t, e, n);
  return (
    n.immediate && e.call(r, o.value),
    function() {
      o.teardown();
    }
  );
}
