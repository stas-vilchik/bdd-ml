{
  if (path.endsWith(".ts") || path.endsWith(".tsx")) {
    return tsc.transpile(src, tsConfig.compilerOptions, path, []);
  }

  return src;
}
