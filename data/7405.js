{
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return (
    nodeName &&
    ((nodeName === "input" && elem.type === "text") ||
      nodeName === "textarea" ||
      elem.contentEditable === "true")
  );
}
