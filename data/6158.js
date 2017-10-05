{
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
}
