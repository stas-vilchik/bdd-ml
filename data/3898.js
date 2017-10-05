{
  try {
    return decodeURIComponent(text);
  } catch (e) {
    return text;
  }
}
