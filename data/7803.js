{
  config.plugin("ignore", () => new webpack.IgnorePlugin(/^(xor|props)$/));
  config.merge({
    resolve: {
      root: resolve(__dirname, "./src"),
      extensions: ["", ".js", ".jsx", ".json"]
    }
  });
  return config;
}
