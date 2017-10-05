{
  console.log(
    blue(path.relative(process.cwd(), dest)) +
      " " +
      getSize(code) +
      (extra || "")
  );
  resolve();
}
