{
  var style = stylesheet[name];

  for (var key in style) {
    if (!result.hasOwnProperty(key)) {
      result[key] = "";
    }
  }
}
