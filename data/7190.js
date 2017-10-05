{
  name = name.toLowerCase();
  var oldValue = this.getAttribute(name);
  operation.apply(this, arguments);
  var newValue = this.getAttribute(name);

  if (this.attributeChangedCallback && newValue !== oldValue) {
    this.attributeChangedCallback(name, oldValue, newValue);
  }
}
