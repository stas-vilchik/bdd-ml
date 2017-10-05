{
  return {
    pre(file) {
      const original = file.get("helperGenerator");
      file.set("helperGenerator", name => {
        if (name === helperName) return false;
        return original(name);
      });
    },

    visitor: {
      ImportDeclaration(path) {
        path.get("source").node.value = path
          .get("source")
          .node.value.replace(/^babel-runtime/, relativePath);
      },

      CallExpression(path) {
        if (
          !path.get("callee").isIdentifier({
            name: "require"
          }) ||
          path.get("arguments").length !== 1 ||
          !path.get("arguments")[0].isStringLiteral()
        ) {
          return;
        }

        path.get("arguments")[0].node.value = path
          .get("arguments")[0]
          .node.value.replace(/^babel-runtime/, relativePath);
      }
    }
  };
}
