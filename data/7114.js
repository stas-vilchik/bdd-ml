{
  var script = document.createElement("script");
  script.__importElement = scriptElt;
  script.src = scriptElt.src ? scriptElt.src : generateScriptDataUrl(scriptElt);
  scope.currentScript = scriptElt;
  this.trackElement(script, function(e) {
    script.parentNode.removeChild(script);
    scope.currentScript = null;
  });
  this.addElementToDocument(script);
}
