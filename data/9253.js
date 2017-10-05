{
  var r = e.value,
    i = t.multiple;

  if (!i || Array.isArray(r)) {
    for (var o, a, s = 0, c = t.options.length; s < c; s++)
      if (((a = t.options[s]), i))
        (o = $(r, Qn(a)) > -1), a.selected !== o && (a.selected = o);
      else if (b(Qn(a), r))
        return void (t.selectedIndex !== s && (t.selectedIndex = s));

    i || (t.selectedIndex = -1);
  }
}
