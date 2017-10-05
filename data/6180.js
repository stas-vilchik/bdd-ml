{
  setTimeout(() => {
    callback({
      timeRemaining() {
        return Infinity;
      }
    });
  });
}
