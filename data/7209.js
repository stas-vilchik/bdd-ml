{
  CustomElements.readyTime = Date.now();

  if (window.HTMLImports) {
    CustomElements.elapsed = CustomElements.readyTime - HTMLImports.readyTime;
  }

  document.dispatchEvent(
    new CustomEvent("WebComponentsReady", {
      bubbles: true
    })
  );
}
