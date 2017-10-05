{
  responseBuffer.push(chunk);

  if (
    config.maxContentLength > -1 &&
    Buffer.concat(responseBuffer).length > config.maxContentLength
  ) {
    reject(
      createError(
        "maxContentLength size of " + config.maxContentLength + " exceeded",
        config,
        null,
        lastRequest
      )
    );
  }
}
