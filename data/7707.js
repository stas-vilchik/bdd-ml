{
  var config = oneEventLoopTestConfig(three);
  config.startShouldSetResponder.captured.grandParent = {
    order: 0,
    returnVal: false
  };
  config.startShouldSetResponder.captured.parent = {
    order: 1,
    returnVal: true
  };
  config.responderGrant.parent = {
    order: 2
  };
  config.responderStart.parent = {
    order: 3
  };
  run(config, three, startConfig(three.child, [three.child], [0]));
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(three.parent)
  );
  config = oneEventLoopTestConfig(three);
  config.startShouldSetResponder.captured.grandParent = {
    order: 0,
    returnVal: true
  };
  config.responderGrant.grandParent = {
    order: 1
  };
  config.responderTerminationRequest.parent = {
    order: 2,
    returnVal: true
  };
  config.responderTerminate.parent = {
    order: 3
  };
  config.responderStart.grandParent = {
    order: 4
  };
  run(config, three, startConfig(three.child, [three.child, three.child], [1]));
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(three.grandParent)
  );
  config = oneEventLoopTestConfig(three);
  config.responderEnd.grandParent = {
    order: 0
  };
  run(config, three, endConfig(three.child, [three.child, three.child], [1]));
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
