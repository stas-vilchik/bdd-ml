{
  if (debugID != null) {
    return getStackAddendumByID(debugID);
  } else {
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    return stack != null ? stack : "";
  }
}
