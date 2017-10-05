{
  let externalModules = externals.slice();

  switch (bundleType) {
    case UMD_DEV:
    case UMD_PROD:
      if (isRenderer) {
        externalModules.push("react");
      }

      break;

    case NODE_DEV:
    case NODE_PROD:
    case RN_DEV:
    case RN_PROD:
      fbjsModules.forEach(module => externalModules.push(module));
      externalModules.push("object-assign");

      if (isRenderer) {
        externalModules.push("react");
      }

      break;

    case FB_DEV:
    case FB_PROD:
      fbjsModules.forEach(module => externalModules.push(module));
      externalModules.push("object-assign");
      externalModules.push("ReactCurrentOwner");
      externalModules.push("lowPriorityWarning");

      if (isRenderer) {
        externalModules.push("React");

        if (externalModules.indexOf("react-dom") > -1) {
          externalModules.push("ReactDOM");
        }
      }

      break;
  }

  return externalModules;
}
