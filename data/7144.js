{
  var e = document.createEvent("HTMLEvents");
  e.initEvent(
    inType,
    dictionary.bubbles === false ? false : true,
    dictionary.cancelable === false ? false : true,
    dictionary.detail
  );
  return e;
}
