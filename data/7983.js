{
  hook.apply(this, arguments);
  remove(invoker.fns, wrappedHook);
}
