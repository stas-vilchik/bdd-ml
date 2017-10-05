{
  return (url + "")
    .replace("https://", "")
    .replace("http://", "")
    .split("/")[0];
}
