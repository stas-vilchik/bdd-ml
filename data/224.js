{
  return (
    s(t) ||
      (r(e),
      t &&
        t.response &&
        (t.response.data = i(
          t.response.data,
          t.response.headers,
          e.transformResponse
        ))),
    Promise.reject(t)
  );
}
