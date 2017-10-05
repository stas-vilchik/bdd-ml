{
  return (
    String(row[key])
      .toLowerCase()
      .indexOf(filterKey) > -1
  );
}
