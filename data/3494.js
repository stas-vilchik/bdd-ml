{
  return /node_modules/.test(module.context) && !/\.css$/.test(module.request);
}
