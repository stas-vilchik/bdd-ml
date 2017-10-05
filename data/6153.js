{
  beforeEach(() => {
    oldEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "";
  });
  afterEach(() => {
    process.env.NODE_ENV = oldEnv;
  });
  it("should add `reactProdInvariant` when it finds `require('invariant')`", () => {
    compare(
      "var invariant = require('invariant');",
      `var _prodInvariant = require('reactProdInvariant');

var invariant = require('invariant');`
    );
  });
  it("should replace simple invariant calls", () => {
    compare(
      "invariant(condition, 'Do not override existing functions.');",
      "var _prodInvariant = require('reactProdInvariant');\n\n" +
        "!condition ? " +
        "__DEV__ ? " +
        "invariant(false, 'Do not override existing functions.') : " +
        `_prodInvariant('16') : void 0;`
    );
  });
  it("should only add `reactProdInvariant` once", () => {
    var expectedInvariantTransformResult =
      "!condition ? " +
      "__DEV__ ? " +
      "invariant(false, 'Do not override existing functions.') : " +
      `_prodInvariant('16') : void 0;`;
    compare(
      `var invariant = require('invariant');
invariant(condition, 'Do not override existing functions.');
invariant(condition, 'Do not override existing functions.');`,
      `var _prodInvariant = require('reactProdInvariant');

var invariant = require('invariant');
${expectedInvariantTransformResult}
${expectedInvariantTransformResult}`
    );
  });
  it("should support invariant calls with args", () => {
    compare(
      "invariant(condition, 'Expected %s target to be an array; got %s', 'foo', 'bar');",
      "var _prodInvariant = require('reactProdInvariant');\n\n" +
        "!condition ? " +
        "__DEV__ ? " +
        "invariant(false, 'Expected %s target to be an array; got %s', 'foo', 'bar') : " +
        `_prodInvariant('7', 'foo', 'bar') : void 0;`
    );
  });
  it("should support invariant calls with a concatenated template string and args", () => {
    compare(
      "invariant(condition, 'Expected a component class, ' + 'got %s.' + '%s', 'Foo', 'Bar');",
      "var _prodInvariant = require('reactProdInvariant');\n\n" +
        "!condition ? " +
        "__DEV__ ? " +
        "invariant(false, 'Expected a component class, got %s.%s', 'Foo', 'Bar') : " +
        `_prodInvariant('18', 'Foo', 'Bar') : void 0;`
    );
  });
}
