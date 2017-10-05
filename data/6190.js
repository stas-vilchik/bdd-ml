{
  if (console[methodName] !== newMethod && !isSpy(console[methodName])) {
    throw new Error(
      "Test did not tear down console." + methodName + " mock properly."
    );
  }

  if (console[methodName].__callCount !== 0) {
    throw new Error(
      "Expected test not to call console." +
        methodName +
        "(). " +
        "If the warning is expected, mock it out using " +
        "spyOn(console, '" +
        methodName +
        "') and test that the " +
        "warning occurs."
    );
  }
}
