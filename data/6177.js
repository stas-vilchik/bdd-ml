{
  console.error(">", [command].concat(args));
  var options = {};

  if (cwd) {
    options.cwd = cwd;
  }

  return execFileSync(command, args, options).toString();
}
