{
  fbSourcePath =
    typeof fbSourcePath === "string" ? fbSourcePath : DEFAULT_FB_SOURCE_PATH;

  if (fbSourcePath.charAt(fbSourcePath.length - 1) !== "/") {
    fbSourcePath += "/";
  }

  const destPath = resolvePath(fbSourcePath + RELATIVE_RN_PATH);
  return doSync(buildPath, destPath);
}
