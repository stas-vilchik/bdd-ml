{
  if (id === "./dep") return depStub;
  return require(id);
}
