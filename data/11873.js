{
  var errors = [];

  if (ast) {
    checkNode(ast, errors);
  }

  return errors;
}
