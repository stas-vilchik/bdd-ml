{
  if (nativeEvent.key) {
    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;

    if (key !== "Unidentified") {
      return key;
    }
  }

  if (nativeEvent.type === "keypress") {
    var charCode = getEventCharCode(nativeEvent);
    return charCode === 13 ? "Enter" : String.fromCharCode(charCode);
  }

  if (nativeEvent.type === "keydown" || nativeEvent.type === "keyup") {
    return translateToKey[nativeEvent.keyCode] || "Unidentified";
  }

  return "";
}
