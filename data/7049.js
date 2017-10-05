{
  if (!options.characterData) return;
  if (options.characterDataOldValue) return getRecordWithOldValue(oldValue);
  return record;
}
