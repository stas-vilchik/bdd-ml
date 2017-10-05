{
  ("use strict");

  var registerWrapper = scope.registerWrapper;
  var setWrapper = scope.setWrapper;
  var unsafeUnwrap = scope.unsafeUnwrap;
  var unwrap = scope.unwrap;
  var unwrapIfNeeded = scope.unwrapIfNeeded;
  var wrap = scope.wrap;
  var OriginalSelection = window.Selection;

  function Selection(impl) {
    setWrapper(impl, this);
  }

  Selection.prototype = {
    get anchorNode() {
      return wrap(unsafeUnwrap(this).anchorNode);
    },

    get focusNode() {
      return wrap(unsafeUnwrap(this).focusNode);
    },

    addRange: function(range) {
      unsafeUnwrap(this).addRange(unwrap(range));
    },
    collapse: function(node, index) {
      unsafeUnwrap(this).collapse(unwrapIfNeeded(node), index);
    },
    containsNode: function(node, allowPartial) {
      return unsafeUnwrap(this).containsNode(
        unwrapIfNeeded(node),
        allowPartial
      );
    },
    extend: function(node, offset) {
      unsafeUnwrap(this).extend(unwrapIfNeeded(node), offset);
    },
    getRangeAt: function(index) {
      return wrap(unsafeUnwrap(this).getRangeAt(index));
    },
    removeRange: function(range) {
      unsafeUnwrap(this).removeRange(unwrap(range));
    },
    selectAllChildren: function(node) {
      unsafeUnwrap(this).selectAllChildren(unwrapIfNeeded(node));
    },
    toString: function() {
      return unsafeUnwrap(this).toString();
    }
  };
  registerWrapper(window.Selection, Selection, window.getSelection());
  scope.wrappers.Selection = Selection;
}
