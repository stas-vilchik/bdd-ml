{
  if (typeof name !== "string" && arguments.length === 1) {
    Array.prototype.push.call(arguments, document._currentScript);
  }

  elementDeclarations.push(arguments);
}
