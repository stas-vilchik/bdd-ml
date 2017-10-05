{
  const filePath = path.resolve(srcDir, filename);

  if ((event === "change" || event === "rename") && exists(filePath)) {
    console.log(chalk.green("->"), `${event}: ${filename}`);
    rebuild(filePath);
  } else {
    const buildFile = path.resolve(srcDir, "..", "build", filename);

    try {
      fs.unlinkSync(buildFile);
      process.stdout.write(
        chalk.red("  \u2022 ") +
          path.relative(path.resolve(srcDir, "..", ".."), buildFile) +
          " (deleted)" +
          "\n"
      );
    } catch (e) {}
  }
}
