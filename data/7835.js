{
  var start = lastTime;
  var stop = Date.now();
  var rate = 1000 / (stop - start);
  bucket.push(rate);

  if (bucket.length > bucketSize) {
    bucket.shift();
  }

  var sum = 0;

  for (var i = 0; i < bucket.length; i++) {
    sum = sum + bucket[i];
  }

  msText.textContent =
    "Repaint rate: " + (sum / bucket.length).toFixed(2) + "/sec";
  lastTime = stop;
}
