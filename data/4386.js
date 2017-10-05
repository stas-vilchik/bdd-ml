{
  if (path.endsWith(".ts") || path.endsWith(".tsx")) {
    return tsc.transpile(
      src,
      {
        jsx: tsc.JsxEmit.React,
        module: tsc.ModuleKind.CommonJS
      },
      path,
      []
    );
  }

  return src;
}
