{
  for (var i = 0; i < lib$es6$promise$asap$$len; i += 2) {
    var callback = lib$es6$promise$asap$$queue[i];
    var arg = lib$es6$promise$asap$$queue[i + 1];
    callback(arg);
    lib$es6$promise$asap$$queue[i] = undefined;
    lib$es6$promise$asap$$queue[i + 1] = undefined;
  }

  lib$es6$promise$asap$$len = 0;
}
