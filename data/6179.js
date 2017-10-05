{
  var factsFolder = "../" + repoSlug.split("/")[1] + "-facts";

  if (!fs.existsSync(factsFolder)) {
    var repoURL;

    if (isCI) {
      repoURL =
        "https://" +
        process.env.GITHUB_USER +
        "@github.com/" +
        repoSlug +
        ".git";
    } else {
      repoURL = "git@github.com:" + repoSlug + ".git";
    }

    exec("git", [
      "clone",
      "--branch",
      "facts",
      "--depth=5",
      repoURL,
      factsFolder
    ]);
  }

  cwd = path.resolve(factsFolder);
  exec("git", ["fetch"]);

  if (exec("git", ["status", "--porcelain"])) {
    console.error("facts-tracker: `git status` is not clean, aborting.");
    process.exit(1);
  }

  exec("git", ["rebase", "origin/facts"]);
}
