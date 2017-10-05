{
  if (req.aborted) return;
  clearTimeout(timer);
  timer = null;
  var stream = res;

  switch (res.headers["content-encoding"]) {
    case "gzip":
    case "compress":
    case "deflate":
      stream = stream.pipe(zlib.createUnzip());
      delete res.headers["content-encoding"];
      break;
  }

  var lastRequest = res.req || req;
  var response = {
    status: res.statusCode,
    statusText: res.statusMessage,
    headers: res.headers,
    config: config,
    request: lastRequest
  };

  if (config.responseType === "stream") {
    response.data = stream;
    settle(resolve, reject, response);
  } else {
    var responseBuffer = [];
    stream.on("data", function handleStreamData(chunk) {
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
    });
    stream.on("error", function handleStreamError(err) {
      if (req.aborted) return;
      reject(enhanceError(err, config, null, lastRequest));
    });
    stream.on("end", function handleStreamEnd() {
      var responseData = Buffer.concat(responseBuffer);

      if (config.responseType !== "arraybuffer") {
        responseData = responseData.toString("utf8");
      }

      response.data = responseData;
      settle(resolve, reject, response);
    });
  }
}
