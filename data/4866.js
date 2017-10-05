{
  if (event === "data") {
    setTimeout(() => {
      callback(mockResponse);
      setTimeout(closeCallback, 0);
    }, 0);
  } else if (event === "close") {
    closeCallback = callback;
  }
}
