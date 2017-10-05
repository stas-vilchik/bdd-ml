{
  var target = require("getEventTarget")(nativeEvent);

  return SyntheticWheelEvent.getPooled({}, "", nativeEvent, target);
}
