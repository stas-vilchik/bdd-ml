{
  var argIndex = 0;
  var message = "Warning: " + format.replace(/%s/g, () => args[argIndex++]);

  if (typeof console !== "undefined") {
    console.warn(message);
  }

  try {
    throw new Error(message);
  } catch (x) {}
}
