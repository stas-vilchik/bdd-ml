{
  if (promiseFactories.length === 0) {
    return Promise.resolve();
  }

  const head = promiseFactories[0];
  const tail = promiseFactories.slice(1);
  const nextPromiseFactory = head;
  const nextPromise = nextPromiseFactory();

  if (!nextPromise || typeof nextPromise.then !== "function") {
    throw new Error("runWaterfall() received something that is not a Promise.");
  }

  return nextPromise.then(() => {
    return runWaterfall(tail);
  });
}
