{
  var Super = this;

  var E = function() {};

  E.prototype = Super.prototype;
  var prototype = new E();
  Object.assign(prototype, Class.prototype);
  Class.prototype = prototype;
  Class.prototype.constructor = Class;
  Class.Interface = Object.assign({}, Super.Interface, Interface);
  Class.augmentClass = Super.augmentClass;
  addEventPoolingTo(Class);
}
