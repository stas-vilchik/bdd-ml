{
  var g;

  function* G1() {
    yield g.throw();
  }

  g = W(G1)();
  assert.throw(() => g.next(), "Generator is already running");

  function* G2() {
    try {
      yield 1;
      yield 2;
    } catch (e) {
      yield "(" + e + ")";
    }

    yield 3;
  }

  var closeMethods = [
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
          value: "(22)",
          done: false
        },
        g.throw(22)
      );
      assert.deepEqual(
        {
          value: 3,
          done: false
        },
        g.next()
      );
      assertThrownEquals(42, () => g.throw(42));
    },
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
          value: 2,
          done: false
        },
        g.next()
      );
      assert.deepEqual(
        {
          value: 3,
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
      assertThrownEquals(44, () => g.throw(44));
    }
  });
  g = W(G2)();
  assertThrownEquals(44, () => g.throw(44));
  assertClosed(g);
  g = W(G2)();
  assert.deepEqual(
    {
      value: 1,
      done: false
    },
    g.next()
  );
  assert.deepEqual(
    {
      value: "(22)",
      done: false
    },
    g.throw(22)
  );
  assert.deepEqual(
    {
      value: 3,
      done: false
    },
    g.next()
  );
  assertThrownEquals(44, () => g.throw(44));
  assertClosed(g);

  function* G3() {
    try {
      yield 1;
      yield 2;
      yield 3;
    } catch (e) {}
  }

  g = W(G3)();
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
    g.throw(44)
  );
  assertClosed(g);
}
