{
  setTimeout(() => {
    throw new Error("async fail");
    done();
  }, 1);
}
