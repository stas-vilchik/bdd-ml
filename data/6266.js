{
  if (!issue.pull_request) {
    return false;
  }

  if (!filteringLabels) {
    return true;
  }

  return issue.labels.some(label => labels[label.name]);
}
