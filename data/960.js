{
  clear();
  saveInFiles(opts.inFiles);
  let args = [binLoc];

  if (binName !== "babel-external-helpers") {
    args.push("--presets", presetLocs, "--plugins", pluginLocs);
  }

  args = args.concat(opts.args);
  const spawn = child.spawn(process.execPath, args);
  let stderr = "";
  let stdout = "";
  spawn.stderr.on("data", function(chunk) {
    stderr += chunk;
  });
  spawn.stdout.on("data", function(chunk) {
    stdout += chunk;
  });
  spawn.on("close", function() {
    let err;

    try {
      assertTest(stdout, stderr, opts);
    } catch (e) {
      err = e;
    }

    if (err) {
      err.message = args.map(arg => `"${arg}"`).join(" ") + ": " + err.message;
    }

    callback(err);
  });

  if (opts.stdin) {
    spawn.stdin.write(opts.stdin);
    spawn.stdin.end();
  }
}
