{
  if (warning.code === "UNRESOLVED_IMPORT") {
    console.error(warning.message);
    process.exit(1);
  }

  console.warn(warning.message || warning);
}
