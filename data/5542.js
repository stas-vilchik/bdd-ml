{
  let launcher;

  try {
    launcher = new ChromeLauncher({
      additionalFlags: [headless ? '--headless' : '']
    });
    await launcher.isDebuggerReady();
  } catch (e) {
    return launcher.run();
  }

  return launcher;
}