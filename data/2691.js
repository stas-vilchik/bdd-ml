{
  assert.isTrue(Array.isArray(callSite));
  assert.isTrue(Object.isFrozen(callSite));
  var rawDescr = Object.getOwnPropertyDescriptor(callSite, "raw");
  assert.isTrue(rawDescr !== undefined);
  assert.isTrue("value" in rawDescr);
  assert.isFalse(rawDescr.enumerable);
  assert.isFalse(rawDescr.writable);
  assert.isFalse(rawDescr.configurable);
  assert.isTrue(Object.isFrozen(callSite.raw));
  assert.isTrue(Array.isArray(callSite.raw));
  assert.isTrue(Object.isFrozen(callSite.raw));
  assert.equal(callSite.raw.length, callSite.length);
  var literalPortionCount = callSite.raw.length;
  var substitutionCount = arguments.length - 1;
  assert.isTrue(
    literalPortionCount == substitutionCount ||
      literalPortionCount == substitutionCount + 1
  );
  return arguments;
}
