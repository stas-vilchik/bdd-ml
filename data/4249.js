{
  this.flag = 1;
  localFlag = false;
  return new Promise(resolve => {
    process.nextTick(resolve);
  }).then(() => {
    console.log("unset flag");
    this.flag = undefined;
  });
}
