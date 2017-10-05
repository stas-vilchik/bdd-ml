{
  var nodeName = elem.nodeName;
  return (
    nodeName &&
    nodeName.toLowerCase() === "input" &&
    (elem.type === "checkbox" || elem.type === "radio")
  );
}
