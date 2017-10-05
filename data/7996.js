{
  if (isUndef(factory.resolved) && isUndef(factory.error)) {
    factory.loading = true;
    forceRender();
  }
}
