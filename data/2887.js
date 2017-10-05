{
  const opts = {
    presets: [
      [
        require("../../babel-preset-es2015"),
        {
          modules: false
        }
      ]
    ],
    plugins: [
      [
        require("../../babel-plugin-transform-runtime"),
        {
          useBuiltIns,
          useESModules: modules === false
        }
      ]
    ]
  };
  return opts;
}
