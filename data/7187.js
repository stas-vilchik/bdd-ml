{
  if (prototype.setAttribute._polyfilled) {
    return;
  }

  var setAttribute = prototype.setAttribute;

  prototype.setAttribute = function(name, value) {
    changeAttribute.call(this, name, value, setAttribute);
  };

  var removeAttribute = prototype.removeAttribute;

  prototype.removeAttribute = function(name) {
    changeAttribute.call(this, name, null, removeAttribute);
  };

  prototype.setAttribute._polyfilled = true;
}
