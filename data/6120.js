{
  ncp(from, to, error => {
    if (error) {
      console.error(error);
      process.exit(1);
    }

    _resolve();
  });
}
