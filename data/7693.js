{
  var config = oneEventLoopTestConfig(three);
  config.startShouldSetResponder.captured.grandParent = {
    order: 0,
    returnVal: false
  };
  config.startShouldSetResponder.captured.parent = {
    order: 1,
    returnVal: false
  };
  config.startShouldSetResponder.captured.child = {
    order: 2,
    returnVal: false
  };
  config.startShouldSetResponder.bubbled.child = {
    order: 3,
    returnVal: false
  };
  config.startShouldSetResponder.bubbled.parent = {
    order: 4,
    returnVal: false
  };
  config.startShouldSetResponder.bubbled.grandParent = {
    order: 5,
    returnVal: false
  };
  run(config, three, startConfig(three.child, [three.child], [0]));
  expect(ResponderEventPlugin._getResponder()).toBe(null);
  config = oneEventLoopTestConfig(three);
  run(config, three, endConfig(three.child, [three.child], [0]));
  expect(ResponderEventPlugin._getResponder()).toBe(null);
}
