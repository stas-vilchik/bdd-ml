{
  let packages = JSON.parse(
    app.execInRepo(`npm access ls-packages ${username}`)
  );
  return PACKAGES.filter(pkg => packages[pkg] !== "read-write");
}
