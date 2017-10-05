{
  const x = 5;
  console.log(x);

  for (let i = 0; i < 7; i++) {
    var qux = function qux(y) {
      const x = y;
      setTimeout(() => x, 0);
    };

    qux(i);
  }
}
