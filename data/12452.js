{
  var stylesheet = ctx.$options.style || {};
  var result = {};
  classList.forEach(function(name) {
    var style = stylesheet[name];
    extend(result, style);
  });
  oldClassList.forEach(function(name) {
    var style = stylesheet[name];

    for (var key in style) {
      if (!result.hasOwnProperty(key)) {
        result[key] = "";
      }
    }
  });
  return result;
}
