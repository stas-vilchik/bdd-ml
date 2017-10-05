{
  circles0 = d3.packSiblings(
    new Array(10).fill().map(() => ({
      r: r(),
      x: x(),
      y: y()
    }))
  );
  circles1 = circles0.slice().reverse();
}
