{
  log("Resolving:", source, "from:", file);
  let resolvedPath;

  if (resolve.isCore(source)) {
    log("resolved to core");
    return {
      found: true,
      path: null
    };
  }

  source = applyModuleNameMapper(source, config);

  try {
    resolvedPath = resolve.sync(source, opts(file, config));
    log("Resolved to:", resolvedPath);
    return {
      found: true,
      path: resolvedPath
    };
  } catch (err) {
    log("resolve threw error:", err);
    return {
      found: false
    };
  }
}
