{
  if (isCI) {
    return process.env.TRAVIS_REPO_SLUG;
  }

  var remotes = exec("git", ["remote", "-v"]).split("\n");

  for (var i = 0; i < remotes.length; ++i) {
    var match = remotes[i].match(/^origin\t[^:]+:([^\.]+).+\(fetch\)/);

    if (match) {
      return match[1];
    }
  }

  console.error("Cannot find repository slug, sorry.");
  process.exit(1);
}
