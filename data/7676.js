{
  var ret = [];

  for (var i = 0; i < arr.length; i++) {
    if (indices.indexOf(i) === -1) {
      ret.push(arr[i]);
    }
  }

  return ret;
}
