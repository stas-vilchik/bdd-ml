{
  src = `${src};\nglobal.__PREPROCESSED__ = true;`;

  if (options.instrument) {
    src = `${src};\nglobal.__INSTRUMENTED__ = true;`;
  }

  return src;
}
