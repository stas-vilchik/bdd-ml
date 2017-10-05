{
  app.ghrepo.getPullRequest(pr.number, (err, body) => {
    if (err) {
      reject(err);
    }

    app.writeTo(`pr-${pr.number}.json`, body);
    const richPull = body;
    richPull.__originalIssue = pr;
    resolve(richPull);
  });
}
