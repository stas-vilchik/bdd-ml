{
  const warned = msg =>
    asserted.some(assertedMsg => msg.toString().indexOf(assertedMsg) > -1);

  let count = console.error.calls.count();
  let args;

  while (count--) {
    args = console.error.calls.argsFor(count);

    if (!warned(args[0])) {
      done.fail(`Unexpected console.error message: ${args[0]}`);
      return;
    }
  }

  done();
}
