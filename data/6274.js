{
  this.log(`Found ${chalk.bold(pulls.length)} pull requests:`);
  pulls.forEach(pr => {
    this.log(`${pr.html_url}: ${chalk.bold(pr.title)}`);
  });
  return this.prompt({
    name: "merge",
    type: "confirm",
    message: `Merge these ${pulls.length} pull requests?`
  }).then(answers => {
    return answers.merge ? pulls : rejectAction("cancelled");
  });
}
