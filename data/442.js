{
  axios("/foo", {
    auth: {
      username: "Aladdin",
      password: "open sesame"
    }
  });
  setTimeout(function() {
    var request = jasmine.Ajax.requests.mostRecent();
    expect(request.requestHeaders["Authorization"]).toEqual(
      "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=="
    );
    done();
  }, 100);
}
