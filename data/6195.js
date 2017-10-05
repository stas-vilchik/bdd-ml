{
  return (
    error.file.filename +
    "(" +
    error.file.getLineAndCharacterOfPosition(error.start).line +
    "): " +
    error.messageText
  );
}
