{
  var request = new XMLHttpRequest();

  if (scope.flags.debug || scope.flags.bust) {
    url += "?" + Math.random();
  }

  request.open("GET", url, xhr.async);
  request.addEventListener("readystatechange", function(e) {
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
  });
  request.send();
  return request;
}
