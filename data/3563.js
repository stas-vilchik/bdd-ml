{
  if (err) {
    console.error("connect to %s error: ", config.get("db"), err.message);
    process.exit(1);
  }
}
