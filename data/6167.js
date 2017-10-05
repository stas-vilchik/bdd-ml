{
  if (!opts || !("errorMapFilePath" in opts)) {
    throw new Error(
      "Missing options. Ensure you pass an object with `errorMapFilePath`."
    );
  }

  var errorMapFilePath = opts.errorMapFilePath;
  var existingErrorMap;

  try {
    existingErrorMap = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, path.basename(errorMapFilePath)),
        "utf8"
      )
    );
  } catch (e) {
    existingErrorMap = {};
  }

  var allErrorIDs = Object.keys(existingErrorMap);
  var currentID;

  if (allErrorIDs.length === 0) {
    currentID = 0;
  } else {
    currentID = Math.max.apply(null, allErrorIDs) + 1;
  }

  existingErrorMap = invertObject(existingErrorMap);

  function transform(source) {
    var ast = babylon.parse(source, babylonOptions);
    traverse(ast, {
      CallExpression: {
        exit: function(astPath) {
          if (
            astPath.get("callee").isIdentifier({
              name: "invariant"
            })
          ) {
            var node = astPath.node;
            var errorMsgLiteral = evalToString(node.arguments[1]);

            if (existingErrorMap.hasOwnProperty(errorMsgLiteral)) {
              return;
            }

            existingErrorMap[errorMsgLiteral] = "" + currentID++;
          }
        }
      }
    });
  }

  function flush(cb) {
    fs.writeFileSync(
      errorMapFilePath,
      JSON.stringify(invertObject(existingErrorMap), null, 2) + "\n",
      "utf-8"
    );
  }

  return function extractErrors(filepath) {
    const source = fs.readFileSync(filepath, "utf-8");
    transform(source);
    flush();
  };
}
