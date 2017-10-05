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
    returnVal: true
  };
  config.responderGrant.parent = {
    order: 5
  };
  config.responderStart.parent = {
    order: 6
  };
  run(config, three, startConfig(three.child, [three.child], [0]));
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(three.parent)
  );
  config = oneEventLoopTestConfig(three);
  config.responderEnd.parent = {
    order: 0
  };
  config.responderRelease.parent = {
    order: 1
  };
  run(config, three, endConfig(three.child, [three.child], [0]));
  expect(ResponderEventPlugin._getResponder()).toBe(null);
}
