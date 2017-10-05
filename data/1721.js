{
  let code = 'export * from "./dep";';
  const depStub = {
    __esModule: false
  };
  const context = {
    module: {
      exports: {}
    },
    require: function(id) {
      if (id === "./dep") return depStub;
      return require(id);
    }
  };
  context.exports = context.module.exports;
  code = babel.transform(code, {
    plugins: [
      [
        require("../"),
        {
          loose: true
        }
      ]
    ],
    ast: false
  }).code;
  vm.runInNewContext(code, context);
  assert.equal(
    context.exports.__esModule,
    true,
    "Expected exports.__esModule === true"
  );
}
