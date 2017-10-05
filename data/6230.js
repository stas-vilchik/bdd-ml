{
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
