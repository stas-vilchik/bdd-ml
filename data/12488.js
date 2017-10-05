{
  var tag = this.tag || this.$vnode.data.tag || "span";
  var map = Object.create(null);
  var prevChildren = (this.prevChildren = this.children);
  var rawChildren = this.$slots.default || [];
  var children = (this.children = []);
  var transitionData = extractTransitionData(this);

  for (var i = 0; i < rawChildren.length; i++) {
    var c = rawChildren[i];

    if (c.tag) {
      if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
        children.push(c);
        map[c.key] = c;
        (c.data || (c.data = {})).transition = transitionData;
      } else if (process.env.NODE_ENV !== "production") {
        var opts = c.componentOptions;
        var name = opts ? opts.Ctor.options.name || opts.tag : c.tag;
        warn("<transition-group> children must be keyed: <" + name + ">");
      }
    }
  }

  if (prevChildren) {
    var kept = [];
    var removed = [];
    prevChildren.forEach(function(c) {
      c.data.transition = transitionData;

      if (map[c.key]) {
        kept.push(c);
      } else {
        removed.push(c);
      }
    });
    this.kept = h(tag, null, kept);
    this.removed = removed;
  }

  return h(tag, null, children);
}
