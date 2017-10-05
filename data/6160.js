{
  compare(
    "invariant(condition, 'Expected a component class, ' + 'got %s.' + '%s', 'Foo', 'Bar');",
    "var _prodInvariant = require('reactProdInvariant');\n\n" +
      "!condition ? " +
      "__DEV__ ? " +
      "invariant(false, 'Expected a component class, got %s.%s', 'Foo', 'Bar') : " +
      `_prodInvariant('18', 'Foo', 'Bar') : void 0;`
  );
}
