{
  if (!hasTransition) {
    return false;
  }

  if (this._hasMove) {
    return this._hasMove;
  }

  var clone = el.cloneNode();

  if (el._transitionClasses) {
    el._transitionClasses.forEach(function(cls) {
      removeClass(clone, cls);
    });
  }

  addClass(clone, moveClass);
  clone.style.display = "none";
  this.$el.appendChild(clone);
  var info = getTransitionInfo(clone);
  this.$el.removeChild(clone);
  return (this._hasMove = info.hasTransform);
}
