{
  var i = distances.length - 1;
  var j = distances[0].length - 1;
  var current = distances[i][j];
  var edits = [];

  while (i > 0 || j > 0) {
    if (i == 0) {
      edits.push(EDIT_ADD);
      j--;
      continue;
    }

    if (j == 0) {
      edits.push(EDIT_DELETE);
      i--;
      continue;
    }

    var northWest = distances[i - 1][j - 1];
    var west = distances[i - 1][j];
    var north = distances[i][j - 1];
    var min;
    if (west < north) min = west < northWest ? west : northWest;
    else min = north < northWest ? north : northWest;

    if (min == northWest) {
      if (northWest == current) {
        edits.push(EDIT_LEAVE);
      } else {
        edits.push(EDIT_UPDATE);
        current = northWest;
      }

      i--;
      j--;
    } else if (min == west) {
      edits.push(EDIT_DELETE);
      i--;
      current = west;
    } else {
      edits.push(EDIT_ADD);
      j--;
      current = north;
    }
  }

  edits.reverse();
  return edits;
}
