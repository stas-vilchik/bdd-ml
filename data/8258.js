{
  if (e.target === el) {
    if (++ended >= propCount) {
      end();
    }
  }
}
