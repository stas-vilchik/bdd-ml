{
  On(t, e, n),
    (cr || lr) &&
      setTimeout(function() {
        On(t, e, n);
      }, 0);
}
