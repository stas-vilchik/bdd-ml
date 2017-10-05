{
  function Foo() {
    _classCallCheck(this, Foo);
  }

  _createClass(Foo, [
    {
      key: "bar",
      value: (function() {
        var _ref = _asyncToGenerator(
          regeneratorRuntime.mark(function _callee() {
            var baz;
            return regeneratorRuntime.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      baz = 0;

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              },
              _callee,
              this
            );
          })
        );

        function bar() {
          return _ref.apply(this, arguments);
        }

        return bar;
      })()
    }
  ]);

  return Foo;
}
