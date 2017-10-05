{
  if (ya.test(e)) t.style.setProperty(e, n);
  else if (ga.test(n)) t.style.setProperty(e, n.replace(ga, ""), "important");
  else {
    var r = $a(e);
    if (Array.isArray(n))
      for (var i = 0, o = n.length; i < o; i++) t.style[r] = n[i];
    else t.style[r] = n;
  }
}
