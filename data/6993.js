{
  return selector
    .replace(colonHostContextRe, polyfillHostContext)
    .replace(colonHostRe, polyfillHost);
}
