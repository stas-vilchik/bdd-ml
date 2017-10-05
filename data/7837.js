{
  var grid = [];

  for (var r = 0; r < rowCount; r++) {
    var row = {
      id: r,
      items: []
    };

    for (var c = 0; c < columnCount; c++) {
      row.items.push({
        id: r + "-" + c
      });
    }

    grid.push(row);
  }

  return grid;
}
