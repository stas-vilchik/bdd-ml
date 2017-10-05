{
  var buff = new ArrayBuffer(str.length * 2);
  var view = new Uint16Array(buff);

  for (var i = 0, l = str.length; i < l; i++) {
    view[i] = str.charCodeAt(i);
  }

  return buff;
}
