{
  if (is_executing) {
    return;
  }

  if (queue.length === 0) {
    return;
  }

  const fn = queue.shift();
  is_executing = true;
  fn(() => {
    is_executing = false;
    execute();
  });
}
