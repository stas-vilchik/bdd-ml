{
  warn(
    'Property or method "' +
      key +
      '" is not defined on the instance but ' +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
    target
  );
}
