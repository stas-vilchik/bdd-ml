{
  var this$1 = this;
  var children = this.$options._renderChildren;

  if (!children) {
    return;
  }

  children = children.filter(function(c) {
    return c.tag || isAsyncPlaceholder(c);
  });

  if (!children.length) {
    return;
  }

  if (process.env.NODE_ENV !== "production" && children.length > 1) {
    warn(
      "<transition> can only be used on a single element. Use " +
        "<transition-group> for lists.",
      this.$parent
    );
  }

  var mode = this.mode;

  if (
    process.env.NODE_ENV !== "production" &&
    mode &&
    mode !== "in-out" &&
    mode !== "out-in"
  ) {
    warn("invalid <transition> mode: " + mode, this.$parent);
  }

  var rawChild = children[0];

  if (hasParentTransition(this.$vnode)) {
    return rawChild;
  }

  var child = getRealChild(rawChild);

  if (!child) {
    return rawChild;
  }

  if (this._leaving) {
    return placeholder(h, rawChild);
  }

  var id = "__transition-" + this._uid + "-";
  child.key =
    child.key == null
      ? child.isComment ? id + "comment" : id + child.tag
      : isPrimitive(child.key)
        ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key
        : child.key;
  var data = ((child.data || (child.data = {})
  ).transition = extractTransitionData(this));
  var oldRawChild = this._vnode;
  var oldChild = getRealChild(oldRawChild);

  if (
    child.data.directives &&
    child.data.directives.some(function(d) {
      return d.name === "show";
    })
  ) {
    child.data.show = true;
  }

  if (
    oldChild &&
    oldChild.data &&
    !isSameChild(child, oldChild) &&
    !isAsyncPlaceholder(oldChild)
  ) {
    var oldData = oldChild && (oldChild.data.transition = extend({}, data));

    if (mode === "out-in") {
      this._leaving = true;
      mergeVNodeHook(oldData, "afterLeave", function() {
        this$1._leaving = false;
        this$1.$forceUpdate();
      });
      return placeholder(h, rawChild);
    } else if (mode === "in-out") {
      if (isAsyncPlaceholder(child)) {
        return oldRawChild;
      }

      var delayedLeave;

      var performLeave = function() {
        delayedLeave();
      };

      mergeVNodeHook(data, "afterEnter", performLeave);
      mergeVNodeHook(data, "enterCancelled", performLeave);
      mergeVNodeHook(oldData, "delayLeave", function(leave) {
        delayedLeave = leave;
      });
    }
  }

  return rawChild;
}
