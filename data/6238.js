{
  if (stats) {
    this.log("Config file exists, nothing to do.");
    reject();
    return;
  }

  this.prompt([
    {
      name: "githubToken",
      type: "input",
      message: `${chalk.bold("GitHub token?")} ${chalk.grey(
        '(needs "repo" privs)'
      )} `
    },
    {
      name: "reactPath",
      type: "input",
      message: `${chalk.bold("Location of local React checkout?")} `,
      validate: input => {
        let npath = path.normalize(untildify(input));

        if (npath === ".") {
          return "Cannot be `.`";
        }

        let stats;

        try {
          stats = fs.statSync(npath);
        } catch (e) {
          return `Error: ${e}`;
        }

        if (!stats.isDirectory()) {
          return `${npath} is not a directory.`;
        }

        return true;
      }
    }
  ]).then(answers => {
    fs.writeFile(app.PATH_TO_CONFIG, JSON.stringify(answers, null, 2), err => {
      if (err) {
        this.log("Error writing config file.", err);
        reject();
      }

      resolve();
    });
  });
}
