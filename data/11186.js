{
  if (typeof context === "function") {
    done = context;
    context = {};
  }

  var result = "";
  var write = createWriteFunction(function(text) {
    result += text;
    return false;
  }, done);

  try {
    render(component, write, context, function() {
      done(null, result);
    });
  } catch (e) {
    done(e);
  }
}
