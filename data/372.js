{
  lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
  lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
  lib$es6$promise$asap$$len += 2;

  if (lib$es6$promise$asap$$len === 2) {
    if (lib$es6$promise$asap$$customSchedulerFn) {
      lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
    } else {
      lib$es6$promise$asap$$scheduleFlush();
    }
  }
}
