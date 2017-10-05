{
  if (typeof val === "function") {
    return instance.document.taskCenter.send(
      "module",
      {
        module: name,
        method: methodName
      },
      [val]
    );
  }
}
