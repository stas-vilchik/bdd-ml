{
  if (hasConsole && !config.silent) {
    console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ""));
  }
}
