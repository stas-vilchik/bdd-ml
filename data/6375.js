{
  return Object.assign(
    createModuleMap(
      paths,
      extractErrors && extractErrorCodes(errorCodeOpts),
      bundleType
    ),
    getInternalModules(),
    getNodeModules(bundleType, isRenderer),
    getFbjsModuleAliases(bundleType)
  );
}
