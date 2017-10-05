{
  const binLoc = path.join(__dirname, "../lib", binName);
  return function(callback) {
    clear();
    saveInFiles(opts.inFiles);
    let args = [binLoc];
    args.push("--presets", presetLocs, "--plugins", pluginLocs);
    args.push("--only", "../../../../packages/*/test");
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
        err.message =
          args.map(arg => `"${arg}"`).join(" ") + ": " + err.message;
      }

      callback(err);
    });

    if (opts.stdin) {
      spawn.stdin.write(opts.stdin);
      spawn.stdin.end();
    }
  };
}
