{
  var rv = value.call(this, e);
  if (rv === false) e.preventDefault();
  else if (name === "onbeforeunload" && typeof rv === "string")
    e.returnValue = rv;
}
