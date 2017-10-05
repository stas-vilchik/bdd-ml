{
  const [foo, bar = 2] = [];

  _export("foo", foo);

  _export("bar", bar);
}
