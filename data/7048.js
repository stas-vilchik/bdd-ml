{
  if (!options.attributes) return;

  if (
    options.attributeFilter &&
    options.attributeFilter.length &&
    options.attributeFilter.indexOf(name) === -1 &&
    options.attributeFilter.indexOf(namespace) === -1
  ) {
    return;
  }

  if (options.attributeOldValue) return getRecordWithOldValue(oldValue);
  return record;
}
