{
  const expectStderr = opts.stderr.trim();
  stderr = stderr.trim();

  if (opts.stderr) {
    if (opts.stderrContains) {
      assert.ok(
        includes(stderr, expectStderr),
        "stderr " +
          JSON.stringify(stderr) +
          " didn't contain " +
          JSON.stringify(expectStderr)
      );
    } else {
      chai.expect(stderr).to.equal(expectStderr, "stderr didn't match");
    }
  } else if (stderr) {
    throw new Error("stderr:\n" + stderr);
  }

  const expectStdout = opts.stdout.trim();
  stdout = stdout.trim();
  stdout = stdout.replace(/\\/g, "/");

  if (opts.stdout) {
    if (opts.stdoutContains) {
      assert.ok(
        includes(stdout, expectStdout),
        "stdout " +
          JSON.stringify(stdout) +
          " didn't contain " +
          JSON.stringify(expectStdout)
      );
    } else {
      chai.expect(stdout).to.equal(expectStdout, "stdout didn't match");
    }
  } else if (stdout) {
    throw new Error("stdout:\n" + stdout);
  }

  if (opts.outFiles) {
    const actualFiles = readDir(path.join(tmpLoc));
    Object.keys(actualFiles).forEach(function(filename) {
      if (!opts.inFiles.hasOwnProperty(filename)) {
        const expect = opts.outFiles[filename];
        const actual = actualFiles[filename];
        chai.expect(expect, "Output is missing: " + filename).to.not.be
          .undefined;

        if (expect) {
          chai
            .expect(actual)
            .to.equal(expect, "Compiled output does not match: " + filename);
        }
      }
    });
    Object.keys(opts.outFiles).forEach(function(filename) {
      chai
        .expect(actualFiles, "Extraneous file in output: " + filename)
        .to.contain.key(filename);
    });
  }
}
