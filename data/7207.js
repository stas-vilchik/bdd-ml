{
  upgradeDocumentTree(wrap(document));

  if (window.HTMLImports) {
    HTMLImports.__importsParsingHook = function(elt) {
      upgradeDocumentTree(wrap(elt.import));
    };
  }

  CustomElements.ready = true;
  setTimeout(function() {
    CustomElements.readyTime = Date.now();

    if (window.HTMLImports) {
      CustomElements.elapsed = CustomElements.readyTime - HTMLImports.readyTime;
    }

    document.dispatchEvent(
      new CustomEvent("WebComponentsReady", {
        bubbles: true
      })
    );
  });
}
