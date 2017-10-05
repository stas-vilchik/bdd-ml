{
  const x = 5;
  console.log(x);
  {
    const x = 7;
    setTimeout(() => x, 0);
  }
}
