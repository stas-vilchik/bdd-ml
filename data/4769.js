{
  return vm.runInNewContext(sourceText, this.global, {
    displayErrors: false,
    filename
  });
}
