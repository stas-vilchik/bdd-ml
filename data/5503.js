{
  var isWarningOrInvariant =
    node.callee.type === "Identifier" &&
    (node.callee.name === "warning" || node.callee.name === "invariant");

  if (!isWarningOrInvariant) {
    return;
  }

  if (node.arguments.length < 2) {
    context.report(node, "{{name}} takes at least two arguments", {
      name: node.callee.name
    });
    return;
  }

  var format = getLiteralString(node.arguments[1]);

  if (format === null) {
    context.report(
      node,
      "The second argument to {{name}} must be a string literal",
      {
        name: node.callee.name
      }
    );
    return;
  }

  if (format.length < 10 || /^[s\W]*$/.test(format)) {
    context.report(
      node,
      "The {{name}} format should be able to uniquely identify this " +
        "{{name}}. Please, use a more descriptive format than: {{format}}",
      {
        name: node.callee.name,
        format: format
      }
    );
    return;
  }

  var expectedNArgs = (format.match(/%s/g) || []).length + 2;

  if (node.arguments.length !== expectedNArgs) {
    context.report(
      node,
      "Expected {{expectedNArgs}} arguments in call to {{name}} based on " +
        'the number of "%s" substitutions, but got {{length}}',
      {
        expectedNArgs: expectedNArgs,
        name: node.callee.name,
        length: node.arguments.length
      }
    );
  }
}
