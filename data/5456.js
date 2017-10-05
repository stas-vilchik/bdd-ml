{
  let opts = this.opts;

  if (typeof args[0] === "string") {
    opts.url = args.shift();
  }

  if (typeof args[0] === "object") {
    opts = Object.assign(opts, args.shift());
  }

  if (opts.headers) this.setHeaders(opts.headers);
  this.opts = opts;
}
