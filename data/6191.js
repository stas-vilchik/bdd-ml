{
  const original = obj[name];

  obj[name] = function devMatcher() {
    try {
      original.apply(this, arguments);
    } catch (e) {
      global.__hadDevFailures = e.stack;
    }
  };
}
