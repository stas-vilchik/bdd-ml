{
  if (isOldIE && typeof ArrayBuffer === "undefined") {
    done();
    return;
  }

  var response;

  function str2ab(str) {
    var buff = new ArrayBuffer(str.length * 2);
    var view = new Uint16Array(buff);

    for (var i = 0, l = str.length; i < l; i++) {
      view[i] = str.charCodeAt(i);
    }

    return buff;
  }

  axios("/foo", {
    responseType: "arraybuffer"
  }).then(function(data) {
    response = data;
  });
  getAjaxRequest().then(function(request) {
    request.respondWith({
      status: 200,
      response: str2ab("Hello world")
    });
    setTimeout(function() {
      expect(response.data.byteLength).toBe(22);
      done();
    }, 100);
  });
}
