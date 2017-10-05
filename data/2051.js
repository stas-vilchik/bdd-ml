{
  const foo = (...args) => bar(...args);

  {
    let args = thing;
    foo(thing);
  }
}
