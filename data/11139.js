{
  try {
    return data.call(vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  }
}
