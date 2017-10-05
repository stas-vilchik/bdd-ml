{
  if (Object.__proto__) {
    element.__proto__ = definition.prototype;
  } else {
    customMixin(element, definition.prototype, definition.native);
    element.__proto__ = definition.prototype;
  }
}
