{
  params = params || {};
  var e = document.createEvent("CustomEvent");
  e.initCustomEvent(
    inType,
    Boolean(params.bubbles),
    Boolean(params.cancelable),
    params.detail
  );
  return e;
}
