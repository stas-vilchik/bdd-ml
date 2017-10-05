{
  if (/bar.js$/.test(filename)) {
    return `${src};\nmodule.exports = createPlugin('bar');`;
  }

  return src;
}
