{
  var loaded = element.import;

  if (loaded) {
    markTargetLoaded({
      target: element
    });
  } else {
    element.addEventListener("load", markTargetLoaded);
    element.addEventListener("error", markTargetLoaded);
  }
}
