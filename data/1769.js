{
  const [foo, bar, ...baz] = [];

  _export("foo", foo);

  _export("bar", bar);

  _export("baz", baz);
}
