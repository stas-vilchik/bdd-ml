{
  var renderer = this;
  ["ResourceHints", "State", "Scripts", "Styles"].forEach(function(type) {
    context["render" + type] = renderer["render" + type].bind(
      renderer,
      context
    );
  });
  context.getPreloadFiles = renderer.getPreloadFiles.bind(renderer, context);
}
