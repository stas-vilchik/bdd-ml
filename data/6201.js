{
  console.log("> " + [command].concat(args).join(" "));
  var options = {
    cwd: process.cwd(),
    env: process.env,
    stdio: "pipe",
    encoding: "utf-8"
  };
  return execFileSync(command, args, options);
}
