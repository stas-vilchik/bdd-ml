{
  for (var e = t.length; e--; ) {
    var n = t[e],
      r = n.vm;
    r._watcher === n && r._isMounted && Ot(r, "updated");
  }
}
