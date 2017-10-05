{
  const prototypeObject = {
    foo: "bar"
  };
  let obj;

  if (Object.create) {
    obj = Object.create(prototypeObject);
  } else {
    function Foo() {}

    Foo.prototype = prototypeObject;
    Foo.prototype.constructor = Foo;
    obj = new Foo();
  }

  jestExpect(
    objectContaining({
      foo: "bar"
    }).asymmetricMatch(obj)
  ).toBe(true);
}
