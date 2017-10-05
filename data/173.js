{
  return (
    s(t, "Content-Type"),
    i.isFormData(e) ||
    i.isArrayBuffer(e) ||
    i.isBuffer(e) ||
    i.isStream(e) ||
    i.isFile(e) ||
    i.isBlob(e)
      ? e
      : i.isArrayBufferView(e)
        ? e.buffer
        : i.isURLSearchParams(e)
          ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"),
            e.toString())
          : i.isObject(e)
            ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e))
            : e
  );
}
