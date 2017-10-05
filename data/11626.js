{
  if (typeof context === "function") {
    done = context;
    context = {};
  }

  if (context) {
    templateRenderer.bindRenderFns(context);
  }

  var result = "";
  var write = createWriteFunction(function(text) {
    result += text;
    return false;
  }, done);

  try {
    render(component, write, context, function() {
      if (template) {
        result = templateRenderer.renderSync(result, context);
      }

      done(null, result);
    });
  } catch (e) {
    done(e);
  }
}
