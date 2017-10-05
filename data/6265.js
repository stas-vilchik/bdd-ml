{
  app.writeTo("stable-issues.json", issues);
  let filteringLabels = Object.keys(labels).length > 0;
  const pulls = issues.filter(issue => {
    if (!issue.pull_request) {
      return false;
    }

    if (!filteringLabels) {
      return true;
    }

    return issue.labels.some(label => labels[label.name]);
  });
  app.writeTo("stable-prs.json", pulls);
  return pulls;
}
