{
  if (true) {
    for (let k in kv) {
      function foo() {
        return this;
      }

      function bar() {
        return foo.call(this);
      }

      console.log(this, k);
    }
  }
}
