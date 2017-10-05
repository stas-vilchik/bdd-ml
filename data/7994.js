{
  factory.resolved = ensureCtor(res, baseCtor);

  if (!sync) {
    forceRender();
  }
}
