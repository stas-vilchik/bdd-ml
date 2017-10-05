{
  packages.forEach(pkg => {
    app.execInRepo(`npm owner add ${username} ${pkg}`);
  });
}
