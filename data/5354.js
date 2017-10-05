{
  timers.runWithRealTimers(() => {
    global.setTimeout();
    throw new Error("test");
  });
}
