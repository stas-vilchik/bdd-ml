{
  complete = self.performance.now() - s;
  console.log(`first chunk: ${first.toFixed(2)}ms`);
  console.log(`complete: ${complete.toFixed(2)}ms`);
  console.log();
}
