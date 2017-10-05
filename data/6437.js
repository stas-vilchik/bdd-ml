{
  var flags = scope.flags || {};
  var file = "webcomponents.js";
  var script = document.querySelector('script[src*="' + file + '"]');
  var flags = {};

  if (!flags.noOpts) {
    location.search
      .slice(1)
      .split("&")
      .forEach(function(o) {
        o = o.split("=");
        o[0] && (flags[o[0]] = o[1] || true);
      });

    if (script) {
      for (var i = 0, a; (a = script.attributes[i]); i++) {
        if (a.name !== "src") {
          flags[a.name] = a.value || true;
        }
      }
    }

    if (flags.log) {
      var parts = flags.log.split(",");
      flags.log = {};
      parts.forEach(function(f) {
        flags.log[f] = true;
      });
    } else {
      flags.log = {};
    }
  }

  flags.shadow = flags.shadow || flags.shadowdom || flags.polyfill;

  if (flags.shadow === "native") {
    flags.shadow = false;
  } else {
    flags.shadow = flags.shadow || !HTMLElement.prototype.createShadowRoot;
  }

  if (flags.register) {
    window.CustomElements = window.CustomElements || {
      flags: {}
    };
    window.CustomElements.flags.register = flags.register;
  }

  scope.flags = flags;
}
