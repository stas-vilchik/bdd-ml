{
  spawn: jest.fn((cmd, args) => {
    let closeCallback;
    return {
      stdout: {
        on: jest.fn().mockImplementation((event, callback) => {
          if (event === "data") {
            setTimeout(() => {
              callback(mockResponse);
              setTimeout(closeCallback, 0);
            }, 0);
          } else if (event === "close") {
            closeCallback = callback;
          }
        }),
        setEncoding: jest.fn()
      }
    };
  });
}
