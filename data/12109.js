{
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, "class");
  var ref = parseStaticClass(staticClass, options);
  var dynamic = ref.dynamic;
  var classResult = ref.classResult;

  if (process.env.NODE_ENV !== "production" && dynamic && staticClass) {
    warn(
      'class="' +
        staticClass +
        '": ' +
        "Interpolation inside attributes has been deprecated. " +
        "Use v-bind or the colon shorthand instead."
    );
  }

  if (!dynamic && classResult) {
    el.staticClass = classResult;
  }

  var classBinding = getBindingAttr(el, "class", false);

  if (classBinding) {
    el.classBinding = classBinding;
  } else if (dynamic) {
    el.classBinding = classResult;
  }
}
