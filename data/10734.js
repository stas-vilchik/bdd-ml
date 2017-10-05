{
  var sortOrders = {};
  this.columns.forEach(function(key) {
    sortOrders[key] = 1;
  });
  return {
    sortKey: "",
    sortOrders: sortOrders
  };
}
