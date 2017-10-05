{
  if (err) throw err;
  console.log(
    "Complete time: " + (self.performance.now() - self.s).toFixed(2) + "ms"
  );
  console.log();
}
