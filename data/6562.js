{
  if (superName) {
    var superDict = defaultInitDicts[superName];
    initDict = mixin(mixin({}, superDict), initDict);
  }

  defaultInitDicts[name] = initDict;
}
