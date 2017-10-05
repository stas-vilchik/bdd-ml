{
  var rowCount = oldEnd - oldStart + 1;
  var columnCount = currentEnd - currentStart + 1;
  var distances = new Array(rowCount);

  for (var i = 0; i < rowCount; i++) {
    distances[i] = new Array(columnCount);
    distances[i][0] = i;
  }

  for (var j = 0; j < columnCount; j++) distances[0][j] = j;

  for (var i = 1; i < rowCount; i++) {
    for (var j = 1; j < columnCount; j++) {
      if (this.equals(current[currentStart + j - 1], old[oldStart + i - 1]))
        distances[i][j] = distances[i - 1][j - 1];
      else {
        var north = distances[i - 1][j] + 1;
        var west = distances[i][j - 1] + 1;
        distances[i][j] = north < west ? north : west;
      }
    }
  }

  return distances;
}
