{
  let opts = [ff ? "--ff-only" : "--no-ff"];

  if (!msg) {
    opts.push("--no-edit");
  } else {
    opts.push(`-m '${msg}''`);
  }

  return app.execInRepo(`git merge ${opts.join(" ")} ${ref}`);
}
