{
  var r = e.value,
    o = t.multiple;

  if (!o || Array.isArray(r)) {
    for (var i, a, s = 0, c = t.options.length; s < c; s++)
      if (((a = t.options[s]), o))
        (i = C(r, En(a)) > -1), a.selected !== i && (a.selected = i);
      else if (b(En(a), r))
        return void (t.selectedIndex !== s && (t.selectedIndex = s));

    o || (t.selectedIndex = -1);
  }
}
