{
  if (Si.errorHandler) Si.errorHandler.call(null, t, e, n);
  else {
    if (!Mi || "undefined" == typeof console) throw t;
    console.error(t);
  }
}
