{
  console.log("Times up! 10 seconds before the next game starts...");
  callback && callback();
  setTimeout(() => {
    infiniteTimerGame(callback);
  }, 10000);
}