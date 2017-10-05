{
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, "style");
  var ref = parseStaticStyle(staticStyle, options);
  var dynamic = ref.dynamic;
  var styleResult = ref.styleResult;

  if (process.env.NODE_ENV !== "production" && dynamic) {
    warn(
      'style="' +
        String(staticStyle) +
        '": ' +
        "Interpolation inside attributes has been deprecated. " +
        "Use v-bind or the colon shorthand instead."
    );
  }

  if (!dynamic && styleResult) {
    el.staticStyle = styleResult;
  }

  var styleBinding = getBindingAttr(el, "style", false);

  if (styleBinding) {
    el.styleBinding = styleBinding;
  } else if (dynamic) {
    el.styleBinding = styleResult;
  }
}
