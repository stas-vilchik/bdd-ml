{
  var imports = doc.querySelectorAll("link[rel=import]");
  var loaded = 0,
    l = imports.length;

  function checkDone(d) {
    if (loaded == l && callback) {
      callback();
    }
  }

  function loadedImport(e) {
    markTargetLoaded(e);
    loaded++;
    checkDone();
  }

  if (l) {
    for (var i = 0, imp; i < l && (imp = imports[i]); i++) {
      if (isImportLoaded(imp)) {
        loadedImport.call(imp, {
          target: imp
        });
      } else {
        imp.addEventListener("load", loadedImport);
        imp.addEventListener("error", loadedImport);
      }
    }
  } else {
    checkDone();
  }
}
