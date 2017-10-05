{
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
}
