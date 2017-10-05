{
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
}
