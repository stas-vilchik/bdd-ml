{
  setImmediateQueue.push(func);
  window.postMessage(sentinel, "*");
}
