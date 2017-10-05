{
  var template = this.parsedTemplate;

  if (!template) {
    throw new Error("renderSync cannot be called without a template.");
  }

  context = context || {};

  if (this.inject) {
    return (
      template.head(context) +
      (context.head || "") +
      this.renderResourceHints(context) +
      this.renderStyles(context) +
      template.neck(context) +
      content +
      this.renderState(context) +
      this.renderScripts(context) +
      template.tail(context)
    );
  } else {
    return (
      template.head(context) +
      template.neck(context) +
      content +
      template.tail(context)
    );
  }
}
