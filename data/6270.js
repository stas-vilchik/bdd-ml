{
  return richPRs
    .filter(pr => {
      if (!pr.merged_at) {
        this.log(
          `${chalk.yellow.bold("WARNING")} ${pr.html_url} was not merged,` +
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
}
