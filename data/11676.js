{
  if (compiler.options.target !== "node") {
    warn('webpack config `target` should be "node".');
  }

  if (
    compiler.options.output &&
    compiler.options.output.libraryTarget !== "commonjs2"
  ) {
    warn('webpack config `output.libraryTarget` should be "commonjs2".');
  }

  if (!compiler.options.externals) {
    tip(
      "It is recommended to externalize dependencies in the server build for " +
        "better build performance."
    );
  }
}
