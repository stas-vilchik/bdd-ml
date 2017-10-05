{
  if (
    typeof requestData === "undefined" &&
    key.toLowerCase() === "content-type"
  ) {
    delete requestHeaders[key];
  } else {
    request.setRequestHeader(key, val);
  }
}
