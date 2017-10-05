{
  for (var i = 0, n = circles.length; i < n; ++i) {
    for (var j = i + 1, ci = circles[i], cj; j < n; ++j) {
      if (intersects(ci, (cj = circles[j]))) {
        return true;
      }
    }
  }

  return false;
}
