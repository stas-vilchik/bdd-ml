{
  if (context) {
    templateRenderer.bindRenderFns(context);
  }

  var renderStream = new RenderStream(function(write, done) {
    render(component, write, context, done);
  });

  if (!template) {
    return renderStream;
  } else {
    var templateStream = templateRenderer.createStream(context);
    renderStream.on("error", function(err) {
      templateStream.emit("error", err);
    });
    renderStream.pipe(templateStream);
    return templateStream;
  }
}
