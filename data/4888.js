{
  if (args[0] === "watch-project") {
    setImmediate(() =>
      callback(null, {
        watch: args[1]
      })
    );
  } else if (args[0] === "query") {
    setImmediate(() => callback(null, mockResponse[args[1]]));
  }
}
