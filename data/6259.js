{
  listMilestones(null)
    .then(milestones => {
      app.writeTo("milestones.json", milestones);
      let milestoneChoices = milestones.map(milestone => {
        return {
          value: milestone.number,
          name: milestone.title
        };
      });
      let labelChoices = SEMVER_LABELS.map(label => {
        return {
          value: label,
          name: label.split("-")[1]
        };
      });
      return this.prompt([
        {
          name: "srcMilestone",
          type: "list",
          message: "Which milestone should we pull PRs from?",
          choices: milestoneChoices
        },
        {
          name: "destMilestone",
          type: "list",
          message: "Which milestone should we assign PRs to upon completion?",
          choices: milestoneChoices
        },
        {
          name: "labels",
          type: "checkbox",
          message:
            "Which PRs should we select (use spacebar to check all that apply)",
          choices: labelChoices
        }
      ]).then(answers => {
        targetMilestone = answers.destMilestone;
        let labels = {};
        answers.labels.forEach(label => {
          labels[label] = true;
        });
        return {
          labels: labels,
          query: {
            milestone: answers.srcMilestone,
            per_page: 100,
            state: "closed"
          }
        };
      });
    })
    .then(({ labels, query }) => {
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
    })
    .then(pulls => {
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
    })
    .then(pulls => {
      this.log(`Found ${chalk.bold(pulls.length)} pull requests:`);
      return new Promise((resolve, reject) => {
        cherryPickPRs
          .call(this, app, pulls)
          .then(results => {
            resolve(results);
          })
          .catch(err => {
            this.log(
              `${chalk.red.bold(
                "ERROR"
              )} Something went wrong and your repo is` +
                ` probably in a bad state. Sorry.`
            );
            resolve({
              successful: [],
              skipped: [],
              didAbort: true
            });
          });
      });
    })
    .then(({ successful, aborted, didAbort }) => {
      if (didAbort) {
        return undefined;
      }

      return Promise.all(
        successful.map(pr => {
          return editIssue(pr.number, {
            milestone: targetMilestone
          });
        })
      );
    })
    .then(() => {
      resolveAction();
    })
    .catch(err => {
      this.log("ERROR", err);
      rejectAction();
    });
}
