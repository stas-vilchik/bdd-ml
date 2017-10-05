{
  SyntheticClipboardEvent = require("SyntheticClipboardEvent");

  createEvent = function(nativeEvent) {
    var target = require("getEventTarget")(nativeEvent);

    return SyntheticClipboardEvent.getPooled({}, "", nativeEvent, target);
  };
}
