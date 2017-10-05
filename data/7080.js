{
  if (request.readyState === 4) {
    var locationHeader = request.getResponseHeader("Location");
    var redirectedUrl = null;

    if (locationHeader) {
      var redirectedUrl =
        locationHeader.substr(0, 1) === "/"
          ? location.origin + locationHeader
          : locationHeader;
    }

    next.call(
      nextContext,
      !xhr.ok(request) && request,
      request.response || request.responseText,
      redirectedUrl
    );
  }
}
