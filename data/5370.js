{
  return bundle.write({
    dest: destination,
    format: "umd",
    moduleName: pkgName
  });
}
