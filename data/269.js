{
  if (req.aborted) return;
  req.abort();
  reject(cancel);
}
