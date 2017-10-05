{
  if (process.platform === "win32") {
    console.warn("[SKIP] Does not work on Windows");
    return true;
  }

  return false;
}
