{
  if (path.endsWith(".ts") || path.endsWith(".tsx")) {
    const result = tsc.transpileModule(src, {
      compilerOptions: {
        module: tsc.ModuleKind.CommonJS,
        sourceMap: true
      },
      fileName: path
    });
    return {
      code: result.outputText,
      map: JSON.parse(result.sourceMapText)
    };
  }

  return src;
}
