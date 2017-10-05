{
  this.cache[url] = resource;
  var $p = this.pending[url];

  for (var i = 0, l = $p.length, p; i < l && (p = $p[i]); i++) {
    this.onload(url, p, resource, err, redirectedUrl);
    this.tail();
  }

  this.pending[url] = null;
}
