{
  if (idx % reportInc === 0) {
    console.log(`> ${Math.round(100 * idx / total)}% complete`);
  }

  return utils.runTest(test, plugins);
}
