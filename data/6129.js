{
  return readdirSync(join(__dirname, "benchmarks")).filter(file =>
    statSync(join(__dirname, "benchmarks", file)).isDirectory()
  );
}
