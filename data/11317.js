{
  var bufferToPush = this.buffer.substring(0, n);
  this.buffer = this.buffer.substring(n);
  this.push(bufferToPush);
}
