{
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;

  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;

    if (dirRE.test(name)) {
      el.hasBindings = true;
      modifiers = parseModifiers(name);

      if (modifiers) {
        name = name.replace(modifierRE, "");
      }

      if (bindRE.test(name)) {
        name = name.replace(bindRE, "");
        value = parseFilters(value);
        isProp = false;

        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);

            if (name === "innerHtml") {
              name = "innerHTML";
            }
          }

          if (modifiers.camel) {
            name = camelize(name);
          }

          if (modifiers.sync) {
            addHandler(
              el,
              "update:" + camelize(name),
              genAssignmentCode(value, "$event")
            );
          }
        }

        if (
          isProp ||
          (!el.component && platformMustUseProp(el.tag, el.attrsMap.type, name))
        ) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) {
        name = name.replace(onRE, "");
        addHandler(el, name, value, modifiers, false, warn$2);
      } else {
        name = name.replace(dirRE, "");
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];

        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }

        addDirective(el, name, rawName, value, arg, modifiers);

        if ("development" !== "production" && name === "model") {
          checkForAliasModel(el, value);
        }
      }
    } else {
      {
        var expression = parseText(value, delimiters);

        if (expression) {
          warn$2(
            name +
              '="' +
              value +
              '": ' +
              "Interpolation inside attributes has been removed. " +
              "Use v-bind or the colon shorthand instead. For example, " +
              'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}
