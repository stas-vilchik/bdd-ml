{
  process.stdout.write(
    Array.from(warnings)
      .sort()
      .join("\n") + "\n"
  );
  cb();
}
