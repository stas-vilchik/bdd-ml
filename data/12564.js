{
  var count = spy.calls.count();
  var args;

  while (count--) {
    args = spy.calls.argsFor(count);

    if (args.some(containsMsg)) {
      return true;
    }
  }

  function containsMsg(arg) {
    return arg.toString().indexOf(msg) > -1;
  }
}
