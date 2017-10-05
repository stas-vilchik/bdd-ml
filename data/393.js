{
  if (sealed) {
    return;
  }

  sealed = true;

  if (thenable !== value) {
    lib$es6$promise$$internal$$resolve(promise, value);
  } else {
    lib$es6$promise$$internal$$fulfill(promise, value);
  }
}
