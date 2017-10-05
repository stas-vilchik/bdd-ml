{
  var mangle = configs.mangle;
  var manglePropertiesOnProd = configs.manglePropertiesOnProd;
  var preserveVersionHeader = configs.preserveVersionHeader;
  var removeComments = configs.removeComments;
  var headerSanityCheck = configs.headerSanityCheck;
  return {
    warnings: false,
    compress: {
      screw_ie8: true,
      dead_code: true,
      unused: true,
      drop_debugger: true,
      evaluate: mangle,
      booleans: true,
      hoist_funs: mangle
    },
    output: {
      beautify: !mangle,

      comments(node, comment) {
        if (preserveVersionHeader && comment.pos === 0 && comment.col === 0) {
          if (
            headerSanityCheck &&
            comment.value.indexOf(headerSanityCheck) === -1
          ) {
            throw new Error(
              "Expected the first comment to be the file header but got: " +
                comment.value
            );
          }

          return true;
        }

        return !removeComments;
      }
    },
    mangleProperties:
      mangle && manglePropertiesOnProd
        ? {
            ignore_quoted: true,
            regex: mangleRegex
          }
        : false,
    mangle: mangle
      ? {
          toplevel: true,
          screw_ie8: true
        }
      : false
  };
}
