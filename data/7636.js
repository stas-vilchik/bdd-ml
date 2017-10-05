{
  if (to !== null) {
    var tag = to.stateNode._nativeTag;
    UIManager.setJSResponder(tag, blockNativeResponder);
  } else {
    UIManager.clearJSResponder();
  }
}
