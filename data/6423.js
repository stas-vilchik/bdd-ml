{
  if (code === 1) {
    console.error("Jest failed!");
  } else {
    console.log("Jest passed!");
  }

  process.exit(code);
}
