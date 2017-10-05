{
  wwwPath = typeof wwwPath === "string" ? wwwPath : DEFAULT_WWW_PATH;

  if (wwwPath.charAt(wwwPath.length - 1) !== "/") {
    wwwPath += "/";
  }

  const destPath = resolvePath(wwwPath + RELATIVE_WWW_PATH);
  return doSync(buildPath, destPath);
}
