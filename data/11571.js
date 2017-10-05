{
  var register = options._ssrRegister;

  if (write.caching && isDef(register)) {
    write.componentBuffer[write.componentBuffer.length - 1].add(register);
  }

  return register;
}
