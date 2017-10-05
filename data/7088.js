{
  flags.load && console.log("fetch", url, elt);

  if (url.match(/^data:/)) {
    var pieces = url.split(",");
    var header = pieces[0];
    var body = pieces[1];

    if (header.indexOf(";base64") > -1) {
      body = atob(body);
    } else {
      body = decodeURIComponent(body);
    }

    setTimeout(
      function() {
        this.receive(url, elt, null, body);
      }.bind(this),
      0
    );
  } else {
    var receiveXhr = function(err, resource, redirectedUrl) {
      this.receive(url, elt, err, resource, redirectedUrl);
    }.bind(this);

    xhr.load(url, receiveXhr);
  }
}
