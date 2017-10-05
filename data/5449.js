{
  this.opts = {
    method: "GET"
  };
  this.response = resolvable();
  this._headers = {};
  this._caseless = caseless(this._headers);

  let failSet = () => {
    throw new Error("Cannot set read-only property.");
  };

  Object.defineProperty(this, "json", {
    get: () => this.response.then(resp => resp.clone().json()),
    set: failSet
  });
  Object.defineProperty(this, "text", {
    get: () => this.response.then(resp => resp.clone().text()),
    set: failSet
  });
  Object.defineProperty(this, "arrayBuffer", {
    get: () => this.response.then(resp => resp.clone().arrayBuffer()),
    set: failSet
  });
  Object.defineProperty(this, "blob", {
    get: () => this.response.then(resp => resp.clone().blob()),
    set: failSet
  });
  Object.defineProperty(this, "formData", {
    get: () => this.response.then(resp => resp.clone().formData()),
    set: failSet
  });

  this._args(...args);

  setTimeout(() => {
    this._request();
  }, 0);
}
