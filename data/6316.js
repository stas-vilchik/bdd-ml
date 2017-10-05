{
  let version = semver.inc(currentVersion, release);
  return {
    value: version,
    name: `${chalk.bold(version)} (${release})`
  };
}
