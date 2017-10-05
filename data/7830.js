{
  if (Date.now() - lastTime < 1000 / 30) return;
  lastTime = Date.now();
  var delta = perf.memory.usedJSHeapSize - lastUsedHeap;
  lastUsedHeap = perf.memory.usedJSHeapSize;
  var color = delta < 0 ? "#830" : "#131";
  var ms = perf.memory.usedJSHeapSize;
  msMin = Math.min(msMin, ms);
  msMax = Math.max(msMax, ms);
  msText.textContent = "Mem: " + bytesToSize(ms, 2);
  var normValue = ms / (30 * 1024 * 1024);
  var height = Math.min(30, 30 - normValue * 30);
  updateGraph(msGraph, height, color);

  function bytesToSize(bytes, nFractDigit) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "n/a";
    nFractDigit = nFractDigit !== undefined ? nFractDigit : 0;
    var precision = Math.pow(10, nFractDigit);
    var i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (
      Math.round(bytes * precision / Math.pow(1024, i)) / precision +
      " " +
      sizes[i]
    );
  }
}
