{
  compare(
    "invariant(condition, 'Do not override existing functions.');",
    "var _prodInvariant = require('reactProdInvariant');\n\n" +
      "!condition ? " +
      "__DEV__ ? " +
      "invariant(false, 'Do not override existing functions.') : " +
      `_prodInvariant('16') : void 0;`
  );
}
