{
  return Object.assign({}, config, {
    banner: getBanner(bundleType, hasteName, filename),
    dest: Packaging.getPackageDestination(config, bundleType, filename),
    footer: getFooter(bundleType),
    format,
    interop: false
  });
}
