{
  readme.push("### " + key[0].toLowerCase() + key.substr(1));
  readme.push("```javascript");
  readme.push(
    "t." +
      key[0].toLowerCase() +
      key.substr(1) +
      "(" +
      types.BUILDER_KEYS[key].join(", ") +
      ")"
  );
  readme.push("```");
  readme.push("");
  readme.push(
    "See also `t.is" +
      key +
      "(node, opts)` and `t.assert" +
      key +
      "(node, opts)`."
  );
  readme.push("");

  if (types.ALIAS_KEYS[key] && types.ALIAS_KEYS[key].length) {
    readme.push(
      "Aliases: " +
        types.ALIAS_KEYS[key]
          .map(function(key) {
            return "`" + key + "`";
          })
          .join(", ")
    );
    readme.push("");
  }

  Object.keys(types.NODE_FIELDS[key])
    .sort(function(fieldA, fieldB) {
      const indexA = types.BUILDER_KEYS[key].indexOf(fieldA);
      const indexB = types.BUILDER_KEYS[key].indexOf(fieldB);
      if (indexA === indexB) return fieldA < fieldB ? -1 : 1;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    })
    .forEach(function(field) {
      const defaultValue = types.NODE_FIELDS[key][field].default;
      const fieldDescription = ["`" + field + "`"];
      const validator = types.NODE_FIELDS[key][field].validate;

      if (customTypes[key] && customTypes[key][field]) {
        fieldDescription.push(`: ${customTypes[key][field]}`);
      } else if (validator) {
        try {
          fieldDescription.push(": `" + getType(validator) + "`");
        } catch (ex) {
          if (ex.code === "UNEXPECTED_VALIDATOR_TYPE") {
            console.log("Unrecognised validator type for " + key + "." + field);
            console.dir(ex.validator, {
              depth: 10,
              colors: true
            });
          }
        }
      }

      if (defaultValue !== null || types.NODE_FIELDS[key][field].optional) {
        fieldDescription.push(
          " (default: `" + util.inspect(defaultValue) + "`)"
        );
      } else {
        fieldDescription.push(" (required)");
      }

      readme.push(" - " + fieldDescription.join(""));
    });
  readme.push("");
  readme.push("---");
  readme.push("");
}
