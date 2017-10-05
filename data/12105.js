{
  function compile(template, options) {
    var finalOptions = Object.create(baseOptions);
    var errors = [];
    var tips = [];

    finalOptions.warn = function(msg, tip) {
      (tip ? tips : errors).push(msg);
    };

    if (options) {
      if (options.modules) {
        finalOptions.modules = (baseOptions.modules || []).concat(
          options.modules
        );
      }

      if (options.directives) {
        finalOptions.directives = extend(
          Object.create(baseOptions.directives),
          options.directives
        );
      }

      for (var key in options) {
        if (key !== "modules" && key !== "directives") {
          finalOptions[key] = options[key];
        }
      }
    }

    var compiled = baseCompile(template, finalOptions);

    if (process.env.NODE_ENV !== "production") {
      errors.push.apply(errors, detectErrors(compiled.ast));
    }

    compiled.errors = errors;
    compiled.tips = tips;
    return compiled;
  }

  return {
    compile: compile,
    compileToFunctions: createCompileToFunctionFn(compile)
  };
}
