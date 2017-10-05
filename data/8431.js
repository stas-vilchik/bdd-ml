{
  el = el && query(el);

  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== "production" &&
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
    return this;
  }

  var options = this.$options;

  if (!options.render) {
    var template = options.template;

    if (template) {
      if (typeof template === "string") {
        if (template.charAt(0) === "#") {
          template = idToTemplate(template);

          if (process.env.NODE_ENV !== "production" && !template) {
            warn(
              "Template element not found or is empty: " + options.template,
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== "production") {
          warn("invalid template option:" + template, this);
        }

        return this;
      }
    } else if (el) {
      template = getOuterHTML(el);
    }

    if (template) {
      if (process.env.NODE_ENV !== "production" && config.performance && mark) {
        mark("compile");
      }

      var ref = compileToFunctions(
        template,
        {
          shouldDecodeNewlines: shouldDecodeNewlines,
          delimiters: options.delimiters,
          comments: options.comments
        },
        this
      );
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      if (process.env.NODE_ENV !== "production" && config.performance && mark) {
        mark("compile end");
        measure(this._name + " compile", "compile", "compile end");
      }
    }
  }

  return mount.call(this, el, hydrating);
}
