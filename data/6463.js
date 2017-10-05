{
  try {
    return Object.getOwnPropertyDescriptor(source, name);
  } catch (ex) {
    return dummyDescriptor;
  }
}
