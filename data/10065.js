{
  var vm = this;

  function on() {
    vm.$off(event, on);
    fn.apply(vm, arguments);
  }

  on.fn = fn;
  vm.$on(event, on);
  return vm;
}
