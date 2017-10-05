{
  jest.mock("getEventCharCode");
  getEventCharCode = require("getEventCharCode");
  SyntheticKeyboardEvent = require("SyntheticKeyboardEvent");

  createEvent = function(nativeEvent) {
    var target = require("getEventTarget")(nativeEvent);

    return SyntheticKeyboardEvent.getPooled({}, "", nativeEvent, target);
  };
}
