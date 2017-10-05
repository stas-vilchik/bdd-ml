{
  if (req.aborted) return;
  reject(enhanceError(err, config, null, lastRequest));
}
