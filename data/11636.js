{
  file = path$2.join(".", file);

  if (files[file]) {
    return evaluateModule(file, sandbox, evaluatedFiles);
  } else if (basedir) {
    return require(resolvedModules[file] ||
      (resolvedModules[file] = resolve.sync(file, {
        basedir: basedir
      })));
  } else {
    return require(file);
  }
}
