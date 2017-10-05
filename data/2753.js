{
  var g;

  function* G1() {
    yield g.next();
  }

  g = W(G1)();
  assert.throw(() => g.next(), "Generator is already running");

  function* G2() {
    yield 1;
  }

  var closeMethods = [
    g => assertThrownEquals(42, () => g.throw(42)),
    g => {
      assert.deepEqual(
        {
          value: 1,
          done: false
        },
        g.next()
      );
      assert.deepEqual(
        {
          value: undefined,
          done: true
        },
        g.next()
      );
    }
  ];
  closeMethods.forEach(closeMethod => {
    g = W(G2)();
    closeMethod(g);

    for (var i = 0; i < 8; i++) {
      assert.deepEqual(
        {
          value: undefined,
          done: true
        },
        g.next()
      );
    }
  });
  g = W(G2)();

  for (var i = 0; i < 8; i++) {
    assert.throw(
      () => g.next(42),
      /^attempt to send (.*?) to newborn generator$/
    );
  }

  assert.deepEqual(
    {
      value: 1,
      done: false
    },
    g.next(undefined)
  );

  function* fib() {
    var fn1 = 1;
    var fn2 = 1;
    var reset;

    while (1) {
      var current = fn2;
      fn2 = fn1;
      fn1 = fn1 + current;
      reset = yield current;

      if (reset) {
        fn1 = 1;
        fn2 = 1;
      }
    }
  }

  function* fibVar() {
    var fn1 = 1;
    var fn2 = 1;

    while (1) {
      var current = fn2;
      fn2 = fn1;
      fn1 = fn1 + current;
      var reset = yield current;

      if (reset) {
        fn1 = 1;
        fn2 = 1;
      }
    }
  }

  function* fibD() {
    var fn1 = 1;
    var fn2 = 1;
    var reset;
    var tmp;

    while (1) {
      var current = fn2;
      fn2 = fn1;
      fn1 = fn1 + current;
      [reset, tmp] = yield current;
      assert.equal(reset, tmp);

      if (reset) {
        fn1 = 1;
        fn2 = 1;
      }
    }
  }

  function* fibVarD() {
    var fn1 = 1;
    var fn2 = 1;
    var tmp;

    while (1) {
      var current = fn2;
      fn2 = fn1;
      fn1 = fn1 + current;
      var [reset, tmp] = yield current;
      assert.equal(reset, tmp);

      if (reset) {
        fn1 = 1;
        fn2 = 1;
      }
    }
  }

  function next(g) {
    return g.next();
  }

  function send(g, v) {
    return g.next(v);
  }

  function nextD(g) {
    return g.next([]);
  }

  function sendD(g, v) {
    return g.next([v, v]);
  }

  function testfib(fibonacci, next, send) {
    var sequence = fibonacci();
    assert.deepEqual(
      {
        value: 1,
        done: false
      },
      sequence.next()
    );
    assert.deepEqual(
      {
        value: 1,
        done: false
      },
      next(sequence)
    );
    assert.deepEqual(
      {
        value: 2,
        done: false
      },
      next(sequence)
    );
    assert.deepEqual(
      {
        value: 3,
        done: false
      },
      next(sequence)
    );
    assert.deepEqual(
      {
        value: 5,
        done: false
      },
      next(sequence)
    );
    assert.deepEqual(
      {
        value: 8,
        done: false
      },
      next(sequence)
    );
    assert.deepEqual(
      {
        value: 13,
        done: false
      },
      next(sequence)
    );
    assert.deepEqual(
      {
        value: 1,
        done: false
      },
      send(sequence, true)
    );
    assert.deepEqual(
      {
        value: 1,
        done: false
      },
      next(sequence)
    );
    assert.deepEqual(
      {
        value: 2,
        done: false
      },
      next(sequence)
    );
    assert.deepEqual(
      {
        value: 3,
        done: false
      },
      next(sequence)
    );
  }

  testfib(W(fib), next, send);
  testfib(W(fibVar), next, send);
  testfib(W(fibD), nextD, sendD);
  testfib(W(fibVarD), nextD, sendD);
}
