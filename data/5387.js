{
  const exampleName = path.basename(exampleDirectory);

  if (NODE_VERSION < 6 && SKIP_ON_OLD_NODE.indexOf(exampleName) !== -1) {
    console.log(`Skipping ${exampleName} on node ${process.version}.`);
    return false;
  }

  if (INSTALL.indexOf(exampleName) !== -1) {
    runCommand("yarn", ["--production"], exampleDirectory);
  }

  return true;
}
