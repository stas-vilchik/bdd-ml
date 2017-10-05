{
  return new Promise((resolve, reject) => {
    hasteMap.once("change", resolve);
  });
}
