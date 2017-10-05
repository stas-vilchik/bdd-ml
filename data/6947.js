{
  ("use strict");

  var isWrapperFor = scope.isWrapperFor;
  var elements = {
    a: "HTMLAnchorElement",
    area: "HTMLAreaElement",
    audio: "HTMLAudioElement",
    base: "HTMLBaseElement",
    body: "HTMLBodyElement",
    br: "HTMLBRElement",
    button: "HTMLButtonElement",
    canvas: "HTMLCanvasElement",
    caption: "HTMLTableCaptionElement",
    col: "HTMLTableColElement",
    content: "HTMLContentElement",
    data: "HTMLDataElement",
    datalist: "HTMLDataListElement",
    del: "HTMLModElement",
    dir: "HTMLDirectoryElement",
    div: "HTMLDivElement",
    dl: "HTMLDListElement",
    embed: "HTMLEmbedElement",
    fieldset: "HTMLFieldSetElement",
    font: "HTMLFontElement",
    form: "HTMLFormElement",
    frame: "HTMLFrameElement",
    frameset: "HTMLFrameSetElement",
    h1: "HTMLHeadingElement",
    head: "HTMLHeadElement",
    hr: "HTMLHRElement",
    html: "HTMLHtmlElement",
    iframe: "HTMLIFrameElement",
    img: "HTMLImageElement",
    input: "HTMLInputElement",
    keygen: "HTMLKeygenElement",
    label: "HTMLLabelElement",
    legend: "HTMLLegendElement",
    li: "HTMLLIElement",
    link: "HTMLLinkElement",
    map: "HTMLMapElement",
    marquee: "HTMLMarqueeElement",
    menu: "HTMLMenuElement",
    menuitem: "HTMLMenuItemElement",
    meta: "HTMLMetaElement",
    meter: "HTMLMeterElement",
    object: "HTMLObjectElement",
    ol: "HTMLOListElement",
    optgroup: "HTMLOptGroupElement",
    option: "HTMLOptionElement",
    output: "HTMLOutputElement",
    p: "HTMLParagraphElement",
    param: "HTMLParamElement",
    pre: "HTMLPreElement",
    progress: "HTMLProgressElement",
    q: "HTMLQuoteElement",
    script: "HTMLScriptElement",
    select: "HTMLSelectElement",
    shadow: "HTMLShadowElement",
    source: "HTMLSourceElement",
    span: "HTMLSpanElement",
    style: "HTMLStyleElement",
    table: "HTMLTableElement",
    tbody: "HTMLTableSectionElement",
    template: "HTMLTemplateElement",
    textarea: "HTMLTextAreaElement",
    thead: "HTMLTableSectionElement",
    time: "HTMLTimeElement",
    title: "HTMLTitleElement",
    tr: "HTMLTableRowElement",
    track: "HTMLTrackElement",
    ul: "HTMLUListElement",
    video: "HTMLVideoElement"
  };

  function overrideConstructor(tagName) {
    var nativeConstructorName = elements[tagName];
    var nativeConstructor = window[nativeConstructorName];
    if (!nativeConstructor) return;
    var element = document.createElement(tagName);
    var wrapperConstructor = element.constructor;
    window[nativeConstructorName] = wrapperConstructor;
  }

  Object.keys(elements).forEach(overrideConstructor);
  Object.getOwnPropertyNames(scope.wrappers).forEach(function(name) {
    window[name] = scope.wrappers[name];
  });
}
