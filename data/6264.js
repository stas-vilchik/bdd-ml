{
  return listIssues(query)
    .then(issues => {
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
    })
    .then(pulls => {
      return Promise.all(
        pulls.map(pr => {
          return getPullRequest(pr.number).then(richPR => {
            app.writeTo(`pr-${pr.number}.json`, richPR);
            richPR.__originalIssue = pr;
            return richPR;
          });
        })
      ).then(richPRs => {
        return richPRs
          .filter(pr => {
            if (!pr.merged_at) {
              this.log(
                `${chalk.yellow.bold(
                  "WARNING"
                )} ${pr.html_url} was not merged,` +
                  ` should have the milestone unset.`
              );
              return false;
            }

            return true;
          })
          .map(pr => {
            pr.merged_at_date = new Date(pr.merged_at);
            return pr;
          })
          .sort((a, b) => a.merged_at_date - b.merged_at_date);
      });
    });
}
