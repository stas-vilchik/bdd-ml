{
  HTMLImports.ready = true;
  HTMLImports.readyTime = new Date().getTime();
  rootDocument.dispatchEvent(
    new CustomEvent("HTMLImportsLoaded", {
      bubbles: true
    })
  );
}
