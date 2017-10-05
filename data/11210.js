{
  if (!called) {
    called = true;
    fn.apply(this, arguments);
  }
}
