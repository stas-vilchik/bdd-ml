{
  if (this.pending[url]) {
    this.pending[url].push(elt);
    return true;
  }

  var resource;

  if (this.cache[url]) {
    this.onload(url, elt, this.cache[url]);
    this.tail();
    return true;
  }

  this.pending[url] = [elt];
  return false;
}
