{
  const srcDir = path.resolve(p, SRC_DIR);
  const pattern = path.resolve(srcDir, "**/*");
  const files = glob.sync(pattern, {
    nodir: true
  });
  process.stdout.write(adjustToTerminalWidth(`${path.basename(p)}\n`));
  files.forEach(file => buildFile(file, true));
  process.stdout.write(`${OK}\n`);
}
