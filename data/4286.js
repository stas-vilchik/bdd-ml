{
  if (this.someContextValue !== "value") {
    throw new Error(
      "expected this.someContextValue to be set: " + this.someContextValue
    );
  }

  resolve();
}
