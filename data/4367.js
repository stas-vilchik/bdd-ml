{
  const error = new Error("important message");
  error.stack = error.stack.replace("Error: important message", "Error   ");
  throw error;
}
