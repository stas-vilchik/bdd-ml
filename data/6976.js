{
  if (part.match(polyfillHost)) {
    return this.colonHostPartReplacer(host, part, suffix);
  } else {
    return host + part + suffix + ", " + part + " " + host + suffix;
  }
}
