{
  var instance = axios.create({
    headers: {
      common: {
        "X-COMMON-HEADER": "commonHeaderValue"
      },
      get: {
        "X-GET-HEADER": "getHeaderValue"
      },
      post: {
        "X-POST-HEADER": "postHeaderValue"
      }
    }
  });
  instance.get("/foo", {
    headers: {
      "X-FOO-HEADER": "fooHeaderValue",
      "X-BAR-HEADER": "barHeaderValue"
    }
  });
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders).toEqual(
      utils.merge(defaults.headers.common, defaults.headers.get, {
        "X-COMMON-HEADER": "commonHeaderValue",
        "X-GET-HEADER": "getHeaderValue",
        "X-FOO-HEADER": "fooHeaderValue",
        "X-BAR-HEADER": "barHeaderValue"
      })
    );
    done();
  });
}
