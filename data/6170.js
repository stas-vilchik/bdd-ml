{
  fs.writeFileSync(
    errorMapFilePath,
    JSON.stringify(invertObject(existingErrorMap), null, 2) + "\n",
    "utf-8"
  );
}
