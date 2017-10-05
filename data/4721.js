{
  process.stdin.isTTY = oldIsTTY;
  process.stderr.write = oldStderr;
  process.stdout.write = oldStdout;
}
