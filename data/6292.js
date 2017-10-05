{
  return new Promise((resolve, reject) => {
    if (!git.isClean(app)) {
      this.log("ERROR: repo not in clean state");
      return reject();
    }

    git.fetch(app, "upstream");
    git.checkout(app, "15-dev");
    git.pull(app);
    git.merge(app, "upstream/15-stable", false);
    this.log(chalk.green.bold(`OK!`));
    this.log(
      `You can now start cherry-picking commits to this branch using the "stable-prs" command.`
    );
    resolve();
  });
}
