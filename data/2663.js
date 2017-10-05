{
  log += '[derived]';
  super.p();
  derived.__proto__ = otherBase;
  super.p();
}