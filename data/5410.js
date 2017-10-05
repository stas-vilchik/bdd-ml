{
  const url =
    file
      .substring(0, 11)
      .split("-")
      .join("/") + file.substring(11).replace(/\.md$/, ".html");
  return `${blogRootURL}${url}`;
}
