{
  if (lastRecord === newRecord) return lastRecord;
  if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord))
    return recordWithOldValue;
  return null;
}
