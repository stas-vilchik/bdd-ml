{
  return new Promise(resolve => {
    process.nextTick(resolve);
  }).then(() => {
    this.flag = 1;
  });
}
