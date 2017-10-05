{
  newMethod.__callCount++;
  oldMethod.apply(this, arguments);
}
