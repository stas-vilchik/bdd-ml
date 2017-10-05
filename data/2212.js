{
  var _newtarget = this instanceof Foo ? this.constructor : void 0;

  const a = function() {
    _newtarget;
  };
}
