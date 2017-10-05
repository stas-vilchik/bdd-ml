{
  const indexA = t.BUILDER_KEYS[type].indexOf(fieldA);
  const indexB = t.BUILDER_KEYS[type].indexOf(fieldB);
  if (indexA === indexB) return fieldA < fieldB ? -1 : 1;
  if (indexA === -1) return 1;
  if (indexB === -1) return -1;
  return indexA - indexB;
}
