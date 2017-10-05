{
  var result = "";
  var i;

  for (i = 0; i < 4; i++) {
    try {
      for (var value of iterator) {
        result += value;
      }
    } catch (e) {
      result += " [" + e + "]";
    }
  }

  return result;
}
