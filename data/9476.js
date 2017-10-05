{
  return t
    .reduce(function(t, e) {
      return t.concat(e.staticKeys || []);
    }, [])
    .join(",");
}
