{
  var n = t.children[0];

  if (1 === n.type) {
    var r = Vr(n, e.options);
    return (
      "inlineTemplate:{render:function(){" +
      r.render +
      "},staticRenderFns:[" +
      r.staticRenderFns
        .map(function(t) {
          return "function(){" + t + "}";
        })
        .join(",") +
      "]}"
    );
  }
}
