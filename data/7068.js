{
  if (document.readyState === "loading") {
    var imports = document.querySelectorAll("link[rel=import]");

    for (var i = 0, l = imports.length, imp; i < l && (imp = imports[i]); i++) {
      handleImport(imp);
    }
  }
}
