{
  var t;
  return (t =
    "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
      ? ArrayBuffer.isView(e)
      : e && e.buffer && e.buffer instanceof ArrayBuffer);
}
