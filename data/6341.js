{
  if (error.code) {
    console.error(`\x1b[31m-- ${error.code} (${error.plugin}) --`);
    console.error(error.message);
    console.error(error.loc);
    console.error(error.codeFrame);
  } else {
    console.error(error);
  }

  process.exit(1);
}
