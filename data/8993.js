{
  options = options || {};
  {
    try {
      new Function("return 1");
    } catch (e) {
      if (e.toString().match(/unsafe-eval|CSP/)) {
        warn(
          "It seems you are using the standalone build of Vue.js in an " +
            "environment with Content Security Policy that prohibits unsafe-eval. " +
            "The template compiler cannot work in this environment. Consider " +
            "relaxing the policy to allow unsafe-eval or pre-compiling your " +
            "templates into render functions."
        );
      }
    }
  }
  var key = options.delimiters
    ? String(options.delimiters) + template
    : template;

  if (cache[key]) {
    return cache[key];
  }

  var compiled = compile(template, options);
  {
    if (compiled.errors && compiled.errors.length) {
      warn(
        "Error compiling template:\n\n" +
          template +
          "\n\n" +
          compiled.errors
            .map(function(e) {
              return "- " + e;
            })
            .join("\n") +
          "\n",
        vm
      );
    }

    if (compiled.tips && compiled.tips.length) {
      compiled.tips.forEach(function(msg) {
        return tip(msg, vm);
      });
    }
  }
  var res = {};
  var fnGenErrors = [];
  res.render = createFunction(compiled.render, fnGenErrors);
  res.staticRenderFns = compiled.staticRenderFns.map(function(code) {
    return createFunction(code, fnGenErrors);
  });
  {
    if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
      warn(
        "Failed to generate render function:\n\n" +
          fnGenErrors
            .map(function(ref) {
              var err = ref.err;
              var code = ref.code;
              return err.toString() + " in\n\n" + code + "\n";
            })
            .join("\n"),
        vm
      );
    }
  }
  return (cache[key] = res);
}
