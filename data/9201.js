{
  var n;
  if (null != (n = t.attrsMap[e]))
    for (var r = t.attrsList, i = 0, o = r.length; i < o; i++)
      if (r[i].name === e) {
        r.splice(i, 1);
        break;
      }
  return n;
}
