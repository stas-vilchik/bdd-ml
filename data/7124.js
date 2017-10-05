{
  var scriptContent = generateScriptContent(script);
  return (
    "data:text/javascript;charset=utf-8," + encodeURIComponent(scriptContent)
  );
}
