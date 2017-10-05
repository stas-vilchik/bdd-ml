{
  if (code !== 0) {
    console.error("Flow failed");
  } else {
    console.log("Flow passed");
  }

  process.exit(code);
}
