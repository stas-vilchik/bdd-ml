{
  var responseData = Buffer.concat(responseBuffer);

  if (config.responseType !== "arraybuffer") {
    responseData = responseData.toString("utf8");
  }

  response.data = responseData;
  settle(resolve, reject, response);
}
