{
  var result = "";
  var i;

  for (i = 0; i < 4; i++) {
    oob = "";

    try {
      for (var value of iterator) {
        result += value;
      }
    } catch (e) {
      result += " [" + e + "]";
    } finally {
      result += " <" + oob + ">";
    }
  }

  return result;
}
