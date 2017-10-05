{
  if (pkg["jsnext:main"]) {
    pkg["main"] = pkg["jsnext:main"];
  }

  return pkg;
}
