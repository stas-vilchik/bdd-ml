{
  return new Promise(function(resolve) {
    setTimeout(function() {
      data.data = "you have been promised!";
      resolve(data);
    }, 10);
  });
}
