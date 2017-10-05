{
  if (!this.parsedTemplate) {
    throw new Error("createStream cannot be called without a template.");
  }

  return new TemplateStream(this, this.parsedTemplate, context || {});
}
