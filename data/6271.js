{
  if (!pr.merged_at) {
    this.log(
      `${chalk.yellow.bold("WARNING")} ${pr.html_url} was not merged,` +
        ` should have the milestone unset.`
    );
    return false;
  }

  return true;
}
