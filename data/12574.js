{
  const id = hash(this.request);
  return code.replace("__MODULE_ID__", id);
}
