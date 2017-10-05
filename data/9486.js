{
  (this.options = t),
    (this.warn = t.warn || en),
    (this.transforms = nn(t.modules, "transformCode")),
    (this.dataGenFns = nn(t.modules, "genData")),
    (this.directives = y(y({}, Hs), t.directives));
  var e = t.isReservedTag || xi;
  (this.maybeComponent = function(t) {
    return !e(t.tag);
  }),
    (this.onceId = 0),
    (this.staticRenderFns = []);
}
