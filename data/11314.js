{
  var n = this$1.expectedSize;
  this$1.buffer += text;

  if (this$1.buffer.length >= n) {
    this$1.next = next;
    this$1.pushBySize(n);
    return true;
  }

  return false;
}
