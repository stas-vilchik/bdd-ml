{
  var config = oneEventLoopTestConfig(three);
  config.startShouldSetResponder.captured.grandParent = {
    order: 0
  };
  config.startShouldSetResponder.captured.parent = {
    order: 1
  };
  config.startShouldSetResponder.captured.child = {
    order: 2
  };
  config.startShouldSetResponder.bubbled.child = {
    order: 3
  };
  config.startShouldSetResponder.bubbled.parent = {
    order: 4
  };
  config.startShouldSetResponder.bubbled.grandParent = {
    order: 5
  };
  run(config, three, startConfig(three.child, [three.child], [0]));
  config = oneEventLoopTestConfig(three);
  config.moveShouldSetResponder.captured.grandParent = {
    order: 0,
    returnVal: false
  };
  config.moveShouldSetResponder.captured.parent = {
    order: 1,
    returnVal: false
  };
  config.moveShouldSetResponder.captured.child = {
    order: 2,
    returnVal: false
  };
  config.moveShouldSetResponder.bubbled.child = {
    order: 3,
    returnVal: false
  };
  config.moveShouldSetResponder.bubbled.parent = {
    order: 4,
    returnVal: false
  };
  config.moveShouldSetResponder.bubbled.grandParent = {
    order: 5,
    returnVal: true
  };
  config.responderGrant.grandParent = {
    order: 6
  };
  config.responderMove.grandParent = {
    order: 7
  };
  run(config, three, moveConfig(three.child, [three.child], [0]));
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
