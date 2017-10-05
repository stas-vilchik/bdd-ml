{
  compare(
    "invariant(condition, 'Expected %s target to be an array; got %s', 'foo', 'bar');",
    "var _prodInvariant = require('reactProdInvariant');\n\n" +
      "!condition ? " +
      "__DEV__ ? " +
      "invariant(false, 'Expected %s target to be an array; got %s', 'foo', 'bar') : " +
      `_prodInvariant('7', 'foo', 'bar') : void 0;`
  );
}
