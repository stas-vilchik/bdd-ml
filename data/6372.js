{
  const modulePath = legacyModule.includes("/")
    ? legacyModule
    : `${legacyModule}/index`;
  const resolvedPath = resolve(`./node_modules/${modulePath}`);
  modulesAlias[`'${legacyModule}'`] = `'${resolvedPath}'`;
}
