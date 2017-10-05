{
  var target = require("getEventTarget")(nativeEvent);

  return SyntheticClipboardEvent.getPooled({}, "", nativeEvent, target);
}
