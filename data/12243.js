{
  var passive = name.charAt(0) === "&";
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === "~";
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === "!";
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
}
