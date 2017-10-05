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
    returnVal: true
  };
  config.responderGrant.grandParent = {
    order: 6
  };
  config.responderStart.grandParent = {
    order: 7
  };
  run(config, three, startConfig(three.child, [three.child], [0]));
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(three.grandParent)
  );
  config = oneEventLoopTestConfig(three);
  config.responderEnd.grandParent = {
    order: 0
  };
  config.responderRelease.grandParent = {
    order: 1
  };
  run(config, three, endConfig(three.child, [three.child], [0]));
  expect(ResponderEventPlugin._getResponder()).toBe(null);
}
