{
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
}
