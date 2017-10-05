{
  function f() {}

  f.prototype = 42;

  class C extends f {}
}
