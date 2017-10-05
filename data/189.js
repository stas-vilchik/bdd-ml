{
  var o = n.config.validateStatus;
  n.status && o && !o(n.status)
    ? t(
        r(
          "Request failed with status code " + n.status,
          n.config,
          null,
          n.request,
          n
        )
      )
    : e(n);
}
