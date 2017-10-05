{
  return function(domNode, eventData) {
    invariant(
      !React.isValidElement(domNode),
      "TestUtils.Simulate expected a DOM node as the first argument but received " +
        "a React element. Pass the DOM node you wish to simulate the event on instead. " +
        "Note that TestUtils.Simulate will not work if you are using shallow rendering."
    );
    invariant(
      !ReactTestUtils.isCompositeComponent(domNode),
      "TestUtils.Simulate expected a DOM node as the first argument but received " +
        "a component instance. Pass the DOM node you wish to simulate the event on instead."
    );
    var dispatchConfig =
      EventPluginRegistry.eventNameDispatchConfigs[eventType];
    var fakeNativeEvent = new Event();
    fakeNativeEvent.target = domNode;
    fakeNativeEvent.type = eventType.toLowerCase();
    var targetInst = ReactDOMComponentTree.getInstanceFromNode(domNode);
    var event = new SyntheticEvent(
      dispatchConfig,
      targetInst,
      fakeNativeEvent,
      domNode
    );
    event.persist();
    Object.assign(event, eventData);

    if (dispatchConfig.phasedRegistrationNames) {
      EventPropagators.accumulateTwoPhaseDispatches(event);
    } else {
      EventPropagators.accumulateDirectDispatches(event);
    }

    ReactDOM.unstable_batchedUpdates(function() {
      ReactControlledComponent.enqueueStateRestore(domNode);
      EventPluginHub.enqueueEvents(event);
      EventPluginHub.processEventQueue(true);
    });
  };
}
