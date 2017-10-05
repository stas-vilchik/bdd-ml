{
  var n = !0;

  try {
    n = document.activeElement !== t;
  } catch (t) {}

  return n && t.value !== e;
}
