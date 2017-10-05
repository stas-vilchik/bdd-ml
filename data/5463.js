{
  let url = this.opts.url;
  delete this.opts.url;

  if (this.opts.json) {
    this.opts.body = JSON.stringify(this.opts.json);
    this.setHeader("content-type", "application/json");
    delete this.opts.json;
  }

  if (this.opts.body) {
    this.opts.body = makeBody(this.opts.body);
  }

  this.opts.headers = makeHeaders(this._headers);
  fetch(url, this.opts)
    .then(resp => this.response.resolve(resp))
    .catch(err => this.response.reject(err));
}
