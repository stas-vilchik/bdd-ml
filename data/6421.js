{
  if (code !== 0) {
    console.error("Lint failed");
  } else {
    console.log("Lint passed");
  }

  process.exit(code);
}
