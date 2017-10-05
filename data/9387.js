{
  var r = this;
  if (a(e)) return Jt(r, t, e, n);
  (n = n || {}).user = !0;
  var i = new $o(r, t, e, n);
  return (
    n.immediate && e.call(r, i.value),
    function() {
      i.teardown();
    }
  );
}
