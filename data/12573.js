{
  var e = document.createEvent("HTMLEvents");
  e.initEvent(event, true, true);
  if (process) process(e);
  target.dispatchEvent(e);
}
