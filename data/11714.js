{
  var trace = vm ? generateComponentTrace(vm) : "";

  if (config.warnHandler) {
    config.warnHandler.call(null, msg, vm, trace);
  } else if (hasConsole && !config.silent) {
    console.error("[Vue warn]: " + msg + trace);
  }
}
