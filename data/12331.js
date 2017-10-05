{
  warn(
    "Avoid mutating an injected value directly since the changes will be " +
      "overwritten whenever the provided component re-renders. " +
      'injection being mutated: "' +
      key +
      '"',
    vm
  );
}
