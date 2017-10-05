{
  var e = t.attrsList.length;
  if (e)
    for (var n = (t.attrs = new Array(e)), r = 0; r < e; r++)
      n[r] = {
        name: t.attrsList[r].name,
        value: JSON.stringify(t.attrsList[r].value)
      };
  else t.pre || (t.plain = !0);
}
