{
  ("use strict");

  var Element = scope.wrappers.Element;
  var HTMLElement = scope.wrappers.HTMLElement;
  var registerObject = scope.registerObject;
  var SVG_NS = "http://www.w3.org/2000/svg";
  var svgTitleElement = document.createElementNS(SVG_NS, "title");
  var SVGTitleElement = registerObject(svgTitleElement);
  var SVGElement = Object.getPrototypeOf(SVGTitleElement.prototype).constructor;

  if (!("classList" in svgTitleElement)) {
    var descr = Object.getOwnPropertyDescriptor(Element.prototype, "classList");
    Object.defineProperty(HTMLElement.prototype, "classList", descr);
    delete Element.prototype.classList;
  }

  scope.wrappers.SVGElement = SVGElement;
}
