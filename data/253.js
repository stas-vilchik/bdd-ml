{
  var url = req.url;

  if (/axios\.min\.js$/.test(url)) {
    pipeFileToResponse(res, "../dist/axios.min.js", "text/javascript");
    return;
  }

  if (/axios\.min\.map$/.test(url)) {
    pipeFileToResponse(res, "../dist/axios.min.map", "text/javascript");
    return;
  }

  if (/axios\.amd\.min\.js$/.test(url)) {
    pipeFileToResponse(res, "../dist/axios.amd.min.js", "text/javascript");
    return;
  }

  if (/axios\.amd\.min\.map$/.test(url)) {
    pipeFileToResponse(res, "../dist/axios.amd.min.map", "text/javascript");
    return;
  }

  if (url === "/" || url === "/index.html") {
    send200(res, getIndexTemplate());
    return;
  }

  if (/\/$/.test(url)) {
    url += "index.html";
  }

  var parts = url.split("/");

  if (dirs.indexOf(parts[parts.length - 1]) > -1) {
    url += "/index.html";
  }

  if (/index\.html$/.test(url)) {
    if (fs.existsSync(path.join(__dirname, url))) {
      pipeFileToResponse(res, url, "text/html");
    } else {
      send404(res);
    }
  } else if (new RegExp("(" + dirs.join("|") + ")/server").test(url)) {
    if (fs.existsSync(path.join(__dirname, url + ".js"))) {
      require(path.join(__dirname, url + ".js"))(req, res);
    } else {
      send404(res);
    }
  } else {
    send404(res);
  }
}
