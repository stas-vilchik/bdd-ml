{
  clearInterval(interval);
  currentAction = reverse ? max : 1;
  fn(currentAction);

  if (
    !max ||
    (!reverse && currentAction < max) ||
    (reverse && currentAction > 0)
  ) {
    interval = setInterval(function() {
      currentAction = reverse ? currentAction - 1 : currentAction + 1;
      fn(currentAction);

      if (
        (!reverse && max && currentAction === max) ||
        (reverse && currentAction === 0)
      ) {
        clearInterval(interval);
      }
    }, delay);
  }
}
