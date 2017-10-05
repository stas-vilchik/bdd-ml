{
  if (er.errorHandler) er.errorHandler.call(null, t, e, n);
  else {
    if (!ar || "undefined" == typeof console) throw t;
    console.error(t);
  }
}
