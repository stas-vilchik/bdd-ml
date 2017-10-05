{
  var event = this.nativeEvent;

  if (!event) {
    return;
  }

  if (event.stopPropagation) {
    event.stopPropagation();
  } else if (typeof event.cancelBubble !== "unknown") {
    event.cancelBubble = true;
  }

  this.isPropagationStopped = emptyFunction.thatReturnsTrue;
}
