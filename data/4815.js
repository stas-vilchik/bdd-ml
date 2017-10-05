{
  mockFs["/fruits/raspberry.js"] = [
    "/**",
    " * @providesModule Strawberry",
    " */",
    'const Banana = require("Banana");'
  ].join("\n");
  return new HasteMap(
    Object.assign(
      {
        throwOnModuleCollision: true
      },
      defaultConfig
    )
  )
    .build()
    .catch(err => {
      expect(err).toMatchSnapshot();
    });
}
