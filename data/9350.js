{
  if (t)
    try {
      t.call(i);
    } catch (t) {
      k(t, i, "nextTick");
    }
  else o && o(i);
}
