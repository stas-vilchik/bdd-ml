{
  asserted = asserted.concat(msg);
  var warned = Array.isArray(msg) ? msg.some(hasWarned) : hasWarned(msg);
  return {
    pass: warned,
    message: warned
      ? 'Expected message "' + msg + '" not to have been warned'
      : 'Expected message "' + msg + '" to have been warned'
  };
}
