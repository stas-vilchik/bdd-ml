{
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
}
