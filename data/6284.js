{
  let promises = prs.map(pr => {
    return () =>
      new Promise((res, rej) => {
        this.log(chalk.yellow(`Cherry-picking #${pr.number} (${pr.title})...`));
        let failed = false;

        try {
          git.cherryPickMerge(app, pr.merge_commit_sha);
        } catch (e) {
          failed = true;
        }

        if (!failed) {
          this.log(chalk.green`Success`);
          successful.push(pr);
          return res();
        }

        return this.prompt({
          name: "handle",
          type: "list",
          message: `${chalk.red`Failed!`} ${chalk.yellow(
            "This must be resolved manually!"
          )}`,
          choices: [
            {
              value: "ok",
              name: "Continue, mark successful"
            },
            {
              value: "skip",
              name: "Continue, mark skipped"
            },
            {
              value: "abort",
              name: "Abort process. Will require manual resetting of git state."
            }
          ]
        }).then(answers => {
          switch (answers.handle) {
            case "ok":
              successful.push(pr);
              break;

            case "skip":
              skipped.push(pr);
              break;

            case "abort":
              return rej(pr.number);
          }

          res(pr.number);
        });
      });
  });
  var p = promises[0]();

  for (let i = 1; i < promises.length; i++) {
    p = p.then(() => promises[i]());
  }

  p
    .then(() => {
      resolve({
        successful,
        skipped,
        didAbort: false
      });
    })
    .catch(e => {
      resolve({
        successful,
        skipped,
        didAbort: true
      });
    });
}
