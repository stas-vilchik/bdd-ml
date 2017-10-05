{
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, "style");

  if (staticStyle) {
    if (process.env.NODE_ENV !== "production") {
      var expression = parseText(staticStyle, options.delimiters);

      if (expression) {
        warn(
          'style="' +
            staticStyle +
            '": ' +
            "Interpolation inside attributes has been removed. " +
            "Use v-bind or the colon shorthand instead. For example, " +
            'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }

    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, "style", false);

  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}
