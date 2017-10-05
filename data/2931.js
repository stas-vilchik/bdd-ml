{
  const indexA = types.BUILDER_KEYS[key].indexOf(fieldA);
  const indexB = types.BUILDER_KEYS[key].indexOf(fieldB);
  if (indexA === indexB) return fieldA < fieldB ? -1 : 1;
  if (indexA === -1) return 1;
  if (indexB === -1) return -1;
  return indexA - indexB;
}
