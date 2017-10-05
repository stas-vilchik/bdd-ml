{
  currentAction = reverse ? currentAction - 1 : currentAction + 1;
  fn(currentAction);

  if (
    (!reverse && max && currentAction === max) ||
    (reverse && currentAction === 0)
  ) {
    clearInterval(interval);
  }
}
