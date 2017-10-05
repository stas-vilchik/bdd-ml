{
  if (event.view) {
    return event.view;
  }

  var target = getEventTarget(event);

  if (target.window === target) {
    return target;
  }

  var doc = target.ownerDocument;

  if (doc) {
    return doc.defaultView || doc.parentWindow;
  } else {
    return window;
  }
}
