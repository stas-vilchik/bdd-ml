{
  const total = tests.length;
  const reportInc = Math.floor(total / 20);
  console.log(`Now running ${total} tests...`);
  const results = tests.map(function(test, idx) {
    if (idx % reportInc === 0) {
      console.log(`> ${Math.round(100 * idx / total)}% complete`);
    }

    return utils.runTest(test, plugins);
  });
  return utils.interpret(results, whitelist);
}
