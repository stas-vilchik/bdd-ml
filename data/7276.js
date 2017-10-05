{
  var ancestorInfo = null;

  for (var i = 0; i < stack.length; i++) {
    if (!validateDOMNesting.isTagValidInContext(stack[i], ancestorInfo)) {
      return false;
    }

    ancestorInfo = validateDOMNesting.updatedAncestorInfo(
      ancestorInfo,
      stack[i],
      null
    );
  }

  return true;
}
