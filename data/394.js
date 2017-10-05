{
  if (sealed) {
    return;
  }

  sealed = true;
  lib$es6$promise$$internal$$reject(promise, reason);
}
