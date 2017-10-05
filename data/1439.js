{
  log += '[Derived]';
  super.p();
  Derived.prototype.__proto__ = OtherBase.prototype;
  super.p();
}