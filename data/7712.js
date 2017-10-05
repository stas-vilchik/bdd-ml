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
    returnVal: true
  };
  config.responderGrant.child = {
    order: 4
  };
  config.responderStart.child = {
    order: 5
  };
  run(config, three, startConfig(three.child, [three.child], [0]));
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(three.child)
  );
  config = oneEventLoopTestConfig(three);
  config.responderEnd.child = {
    order: 0
  };
  config.responderTerminate.child = {
    order: 1
  };

  var nativeEvent = _touchConfig(
    "topTouchCancel",
    three.child,
    [three.child],
    [0]
  );

  run(config, three, nativeEvent);
  expect(ResponderEventPlugin._getResponder()).toBe(null);
}
