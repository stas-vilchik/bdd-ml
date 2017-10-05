exec(command, error => {
  if (!error) {
    _resolve();
  } else {
    console.error(error);
    process.exit(1);
  }
});
