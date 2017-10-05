{
  var sortKey = this.sortKey;
  var filterKey = this.filterKey && this.filterKey.toLowerCase();
  var order = this.sortOrders[sortKey] || 1;
  var data = this.data;

  if (filterKey) {
    data = data.filter(function(row) {
      return Object.keys(row).some(function(key) {
        return (
          String(row[key])
            .toLowerCase()
            .indexOf(filterKey) > -1
        );
      });
    });
  }

  if (sortKey) {
    data = data.slice().sort(function(a, b) {
      a = a[sortKey];
      b = b[sortKey];
      return (a === b ? 0 : a > b ? 1 : -1) * order;
    });
  }

  return data;
}
