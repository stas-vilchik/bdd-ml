{
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
