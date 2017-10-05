{
  fakeNativeEvent.target = node;
  ReactDOMEventListener.dispatchEvent(topLevelType, fakeNativeEvent);
}
