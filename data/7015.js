{
  if (e.data === sentinel) {
    var queue = setImmediateQueue;
    setImmediateQueue = [];
    queue.forEach(function(func) {
      func();
    });
  }
}
