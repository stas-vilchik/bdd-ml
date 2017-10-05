{
  var target = require("getEventTarget")(nativeEvent);

  return SyntheticKeyboardEvent.getPooled({}, "", nativeEvent, target);
}
