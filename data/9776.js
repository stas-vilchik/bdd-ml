{
  var res = "";
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef((stringified = stringifyClass(value[i]))) && stringified !== "") {
      if (res) {
        res += " ";
      }

      res += stringified;
    }
  }

  return res;
}
