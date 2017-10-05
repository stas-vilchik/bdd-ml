{
  if (t)
    try {
      t.call(o);
    } catch (t) {
      k(t, o, "nextTick");
    }
  else i && i(o);
}
