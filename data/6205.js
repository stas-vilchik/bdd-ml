{
  fs.readFile(file.path, "utf8", function(err, source) {
    if (err) {
      cb(err);
      return;
    }

    const ast = babylon.parse(source, babylonOptions);
    traverse(ast, {
      CallExpression: {
        exit: function(astPath) {
          const callee = astPath.get("callee");

          if (
            callee.isIdentifier({
              name: "warning"
            }) ||
            callee.isIdentifier({
              name: "lowPriorityWarning"
            })
          ) {
            const node = astPath.node;
            const warningMsgLiteral = evalToString(node.arguments[1]);
            warnings.add(JSON.stringify(warningMsgLiteral));
          }
        }
      }
    });
    cb(null);
  });
}
