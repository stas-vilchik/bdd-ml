{
  return modules
    ? modules
        .map(function(m) {
          return m[key];
        })
        .filter(function(_) {
          return _;
        })
    : [];
}
