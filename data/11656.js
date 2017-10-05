{
  rewriteErrorTrace(err, maps);
  process.nextTick(function() {
    res.emit("error", err);
  });
}
