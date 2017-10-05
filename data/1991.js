{
  if (foo) {
    for (let i = 0; i < queue.length; i++) {
      queue[i](...args);
    }
  }
}
