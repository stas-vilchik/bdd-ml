{
  let r = async (z, b, ...innerArgs) => {
    await z;
    console.log(this, innerArgs, arguments);
    return this.x;
  };

  await r();
  console.log(this, args, arguments);
  return this.g(r);
}