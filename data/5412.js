{
  const matches = /(.*?): (.*)/.exec(str);
  metadata[matches[1]] = matches[2];
  return metadata;
}
