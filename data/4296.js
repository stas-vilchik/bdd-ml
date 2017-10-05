{
  setTimeout(() => {
    throw new Error("async fail - no done");
  }, 1);
}
