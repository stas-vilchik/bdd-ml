{
  try {
    new window.FocusEvent("focus");
  } catch (ex) {
    return false;
  }

  return true;
}
