{
  o = o.split("=");
  o[0] && (flags[o[0]] = o[1] || true);
}
