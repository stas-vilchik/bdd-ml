{
  var owner = script.ownerDocument;
  owner.__importedScripts = owner.__importedScripts || 0;
  var moniker = script.ownerDocument.baseURI;
  var num = owner.__importedScripts ? "-" + owner.__importedScripts : "";
  owner.__importedScripts++;
  return "\n//# sourceURL=" + moniker + num + ".js\n";
}
