{
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
}
