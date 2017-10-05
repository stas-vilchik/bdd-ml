{
  compare(
    "var invariant = require('invariant');",
    `var _prodInvariant = require('reactProdInvariant');

var invariant = require('invariant');`
  );
}
