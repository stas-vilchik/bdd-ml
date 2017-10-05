{
  SyntheticWheelEvent = require("SyntheticWheelEvent");

  createEvent = function(nativeEvent) {
    var target = require("getEventTarget")(nativeEvent);

    return SyntheticWheelEvent.getPooled({}, "", nativeEvent, target);
  };
}
