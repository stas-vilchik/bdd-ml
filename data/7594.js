{
  return function(domComponentOrNode, nativeEventData) {
    var fakeNativeEvent = new Event(eventType);
    Object.assign(fakeNativeEvent, nativeEventData);

    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
      ReactTestUtils.simulateNativeEventOnDOMComponent(
        eventType,
        domComponentOrNode,
        fakeNativeEvent
      );
    } else if (domComponentOrNode.tagName) {
      ReactTestUtils.simulateNativeEventOnNode(
        eventType,
        domComponentOrNode,
        fakeNativeEvent
      );
    }
  };
}
