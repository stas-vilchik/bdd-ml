{
  if (app) {
    renderer.renderToString(app, context, function(err, res) {
      rewriteErrorTrace(err, maps);
      cb(err, res);
    });
  }
}
