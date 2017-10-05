{
  if (typeof context === "function") {
    cb = context;
    context = {};
  }

  run(context)
    .catch(function(err) {
      rewriteErrorTrace(err, maps);
      cb(err);
    })
    .then(function(app) {
      if (app) {
        renderer.renderToString(app, context, function(err, res) {
          rewriteErrorTrace(err, maps);
          cb(err, res);
        });
      }
    });
}
