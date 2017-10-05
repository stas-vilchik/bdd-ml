{
  try {
    var result = gen[key](arg);
    var value = result.value;

    if (value instanceof AwaitValue) {
      Promise.resolve(value.value).then(
        function(arg) {
          resume("next", arg);
        },
        function(arg) {
          resume("throw", arg);
        }
      );
    } else {
      settle(result.done ? "return" : "normal", result.value);
    }
  } catch (err) {
    settle("throw", err);
  }
}
