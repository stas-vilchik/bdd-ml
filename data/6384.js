{
  const from = resolve(`./packages/${packageName}`);
  const to = resolve(`./build/packages/${packageName}`);

  if (!fs.existsSync(to) && fs.existsSync(from)) {
    return asyncCopyTo(from, to).then(() =>
      asyncCopyTo(resolve("./LICENSE"), `${to}/LICENSE`)
    );
  } else {
    return Promise.resolve();
  }
}
