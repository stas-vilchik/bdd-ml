{
  const Client = jest.fn();
  Client.prototype.command = jest.fn((args, callback) => {
    if (args[0] === "watch-project") {
      setImmediate(() =>
        callback(null, {
          watch: args[1]
        })
      );
    } else if (args[0] === "query") {
      setImmediate(() => callback(null, mockResponse[args[1]]));
    }
  });
  Client.prototype.on = jest.fn();
  Client.prototype.end = jest.fn();
  return {
    Client
  };
}
