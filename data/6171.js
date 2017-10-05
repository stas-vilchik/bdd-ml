{
  const source = fs.readFileSync(filepath, "utf-8");
  transform(source);
  flush();
}
