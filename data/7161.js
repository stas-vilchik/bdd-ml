{
  pendingMutations.push(fn);

  if (!isPendingMutations) {
    isPendingMutations = true;
    setTimeout(takeMutations);
  }
}
