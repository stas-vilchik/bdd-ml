{
  this.defaultPrevented = true;
  var event = this.nativeEvent;

  if (!event) {
    return;
  }

  if (event.preventDefault) {
    event.preventDefault();
  } else if (typeof event.returnValue !== "unknown") {
    event.returnValue = false;
  }

  this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
}
