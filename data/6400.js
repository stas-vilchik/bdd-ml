{
  fs.writeFileSync(
    join("scripts", "rollup", "results.json"),
    JSON.stringify(currentBuildResults, null, 2)
  );
}
