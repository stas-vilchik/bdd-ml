{
  if (isNestingBatched) {
    return batchedUpdates(fn, bookkeeping);
  }

  isNestingBatched = true;

  try {
    return batchedUpdates(fn, bookkeeping);
  } finally {
    isNestingBatched = false;
    ReactControlledComponent.restoreStateIfNeeded();
  }
}
