{
  return getPullRequest(pr.number).then(richPR => {
    app.writeTo(`pr-${pr.number}.json`, richPR);
    richPR.__originalIssue = pr;
    return richPR;
  });
}
