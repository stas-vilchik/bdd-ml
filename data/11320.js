{
  this.expectedSize = n;

  if (isTrue(this.done)) {
    this.push(null);
    return;
  }

  if (this.buffer.length >= n) {
    this.pushBySize(n);
    return;
  }

  if (isUndef(this.next)) {
    this.tryRender();
  } else {
    this.tryNext();
  }
}
