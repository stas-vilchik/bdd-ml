{
  if (node.namespaceURI === Namespaces.svg && !("innerHTML" in node)) {
    reusableSVGContainer =
      reusableSVGContainer || document.createElement("div");
    reusableSVGContainer.innerHTML = "<svg>" + html + "</svg>";
    var svgNode = reusableSVGContainer.firstChild;

    while (svgNode.firstChild) {
      node.appendChild(svgNode.firstChild);
    }
  } else {
    node.innerHTML = html;
  }
}
