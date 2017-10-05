{
  if (name !== "matches") {
    Element.prototype[name] = function(selector) {
      return this.matches(selector);
    };
  }
}
