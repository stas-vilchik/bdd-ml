{
  let dest = config.destDir + filename;

  if (bundleType === FB_DEV || bundleType === FB_PROD) {
    dest = `${config.destDir}${facebookWWW}/${filename}`;
  } else if (bundleType === UMD_DEV || bundleType === UMD_PROD) {
    dest = `${config.destDir}dist/${filename}`;
  } else if (bundleType === RN_DEV || bundleType === RN_PROD) {
    dest = `${config.destDir}react-native/${filename}`;
  }

  return dest;
}
