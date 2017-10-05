{
  let is_executing = false;
  const queue = [];

  function push(fn) {
    queue.push(fn);
    execute();
  }

  function execute() {
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

  return {
    push
  };
}
