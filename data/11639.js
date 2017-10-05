{
  if (userContext === void 0) userContext = {};
  return new Promise(function(resolve) {
    userContext._registeredComponents = new Set();
    var res = evaluate(entry, createSandbox(userContext));
    resolve(typeof res === "function" ? res(userContext) : res);
  });
}
