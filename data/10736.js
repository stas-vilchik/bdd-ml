{
  return Object.keys(row).some(function(key) {
    return (
      String(row[key])
        .toLowerCase()
        .indexOf(filterKey) > -1
    );
  });
}
