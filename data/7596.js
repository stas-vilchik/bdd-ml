{
  var convenienceName =
    eventType.indexOf("top") === 0
      ? eventType.charAt(3).toLowerCase() + eventType.substr(4)
      : eventType;
  ReactTestUtils.SimulateNative[convenienceName] = makeNativeSimulator(
    eventType
  );
}
