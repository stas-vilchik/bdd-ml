{
  return n ? F(t, e, n) : e && "function" != typeof e ? t : F.call(this, t, e);
}
