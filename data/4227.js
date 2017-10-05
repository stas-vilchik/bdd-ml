{
  if (process.stdout.isTTY) {
    process.stderr.write("\x1b[999D\x1b[K");
  }
}
