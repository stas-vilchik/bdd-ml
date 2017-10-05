{
  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
  return (
    nodeName === "select" || (nodeName === "input" && elem.type === "file")
  );
}
