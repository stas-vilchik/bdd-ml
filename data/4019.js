{
  console.log("Ready....go!");
  setTimeout(() => {
    console.log("Times up -- stop!");
    callback && callback();
  }, 1000);
}
