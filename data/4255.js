{
  this.flag = 1;
  localFlag = false;
  return new Promise(resolve => {
    process.nextTick(resolve);
  }).then(() => {
    this.flag = undefined;
  });
}
