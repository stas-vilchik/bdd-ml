{
  if (Lo.test(e)) t.style.setProperty(e, n);
  else if (Po.test(n)) t.style.setProperty(e, n.replace(Po, ""), "important");
  else {
    var r = Fo(e);
    if (Array.isArray(n))
      for (var o = 0, i = n.length; o < i; o++) t.style[r] = n[o];
    else t.style[r] = n;
  }
}
