{
  userContext._registeredComponents = new Set();
  var res = evaluate(entry, createSandbox(userContext));
  resolve(typeof res === "function" ? res(userContext) : res);
}
