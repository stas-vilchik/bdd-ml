{
  const x = 5;
  console.log(x);

  for (let i = 0; i < 7; i++) {
    {
      const x = i;
      setTimeout(() => x, 0);
    }
  }
}
