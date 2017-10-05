{
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
}
