{
  richPulls.forEach(pr => {
    pr.merged_at_date = new Date(pr.merged_at);
  });
  richPulls = richPulls.sort((a, b) => a.merged_at_date - b.merged_at_date);
  this.log(`Found ${chalk.bold(richPulls.length)} pull requests:`);
  richPulls.forEach(pr => {
    this.log(`${pr.html_url}: ${chalk.bold(pr.title)}`);
  });
  this.prompt(
    {
      name: "merge",
      type: "confirm",
      message: `Merge these ${richPulls.length} pull requests?`
    },
    res => {
      if (res.merge) {
        richPulls.forEach(pr => {
          git.cherryPickMerge(app, pr.merge_commit_sha);
        });
        this.prompt(
          {
            name: "push",
            type: "confirm",
            message: "Push these commits upstream?"
          },
          res => {
            if (res.push) {
              git.push(app);
              this.log(
                `Pushed upstream! Removing "${DOCS_LABEL}" label from pull requests.`
              );
            }

            var removeLabelsPromises = richPulls.map(pr => {
              return new Promise((resolve, reject) => {
                const updatedLabels = pr.__originalIssue.labels
                  .filter(label => label.name !== DOCS_LABEL)
                  .map(label => label.name);

                app.ghissues.editIssue(
                  pr.number,
                  {
                    labels: updatedLabels
                  },
                  (err, body) => {
                    if (err) {
                      reject(err);
                    } else {
                      resolve(pr);
                    }
                  }
                );
              });
            });
            Promise.all(removeLabelsPromises).then(() => {
              this.log("Done!");
              actionCB();
            });
          }
        );
      } else {
        actionCB();
      }
    }
  );
}
