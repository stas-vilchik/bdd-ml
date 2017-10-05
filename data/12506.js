{
  var result = instance.document.taskCenter.callback(
    callbackId,
    data,
    ifKeepAlive
  );
  instance.document.taskCenter.send(
    "dom",
    {
      action: "updateFinish"
    },
    []
  );
  return result;
}
