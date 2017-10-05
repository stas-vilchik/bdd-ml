{
  var res = new PassThrough();
  run(context)
    .catch(function(err) {
      rewriteErrorTrace(err, maps);
      process.nextTick(function() {
        res.emit("error", err);
      });
    })
    .then(function(app) {
      if (app) {
        var renderStream = renderer.renderToStream(app, context);
        renderStream.on("error", function(err) {
          rewriteErrorTrace(err, maps);
          res.emit("error", err);
        });

        if (rendererOptions && rendererOptions.template) {
          renderStream.on("beforeStart", function() {
            res.emit("beforeStart");
          });
          renderStream.on("beforeEnd", function() {
            res.emit("beforeEnd");
          });
        }

        renderStream.pipe(res);
      }
    });
  return res;
}
