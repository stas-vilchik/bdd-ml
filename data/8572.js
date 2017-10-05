{
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}
