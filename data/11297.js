{
  var res = "";

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += " ";
      }

      res += key;
    }
  }

  return res;
}
