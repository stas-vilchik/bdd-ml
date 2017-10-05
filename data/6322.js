{
  switch (bundleType) {
    case UMD_DEV:
    case UMD_PROD:
      return Header.getHeader(filename, reactVersion);

    case NODE_DEV:
      let banner = Header.getHeader(filename, reactVersion);
      banner += `'use strict';\n\n\nif (process.env.NODE_ENV !== "production") {\n(function() {\n`;
      return banner;

    case NODE_PROD:
      return Header.getHeader(filename, reactVersion);

    case FB_DEV:
    case FB_PROD:
    case RN_DEV:
    case RN_PROD:
      const isDev = bundleType === FB_DEV || bundleType === RN_DEV;
      const hasteFinalName = hasteName + (isDev ? "-dev" : "-prod");
      return (
        Header.getProvidesHeader(hasteFinalName) +
        (isDev ? `\n\n'use strict';\n\n\nif (__DEV__) {\n(function() {\n` : "")
      );

    default:
      throw new Error("Unknown type.");
  }
}
