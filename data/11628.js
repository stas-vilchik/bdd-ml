{
  if (template) {
    result = templateRenderer.renderSync(result, context);
  }

  done(null, result);
}
