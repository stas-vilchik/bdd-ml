{
  let Promise;
  await bar();

  async function bar() {
    return Promise.resolve();
  }
}