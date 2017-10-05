{
  var n = t.directives;

  if (n) {
    var r,
      i,
      o,
      a,
      s = "directives:[",
      c = !1;

    for (r = 0, i = n.length; r < i; r++) {
      (o = n[r]), (a = !0);
      var u = e.directives[o.name];
      u && (a = !!u(t, o, e.warn)),
        a &&
          ((c = !0),
          (s +=
            '{name:"' +
            o.name +
            '",rawName:"' +
            o.rawName +
            '"' +
            (o.value
              ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value)
              : "") +
            (o.arg ? ',arg:"' + o.arg + '"' : "") +
            (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") +
            "},"));
    }

    return c ? s.slice(0, -1) + "]" : void 0;
  }
}
