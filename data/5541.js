{
  const platform = os.platform();

  if (platform === 'linux') {
    process.env.XVFBARGS = '-screen 0, 1024x768x16';
    process.env.LIGHTHOUSE_CHROMIUM_PATH = 'chromium-browser';
    const child = spawn('xvfb start', [{
      detached: true,
      stdio: ['ignore']
    }]);
    child.unref();
    await wait(3000);
    return child;
  }
}