{
  console.log(`${chalk.bgYellow.black(" SYNCING ")} React to ${destPath}`);
  const promise = asyncCopyTo(buildPath, destPath);
  promise.then(() => {
    console.log(`${chalk.bgGreen.black(" SYNCED ")} React to ${destPath}`);
  });
  return promise;
}
