{
  if (!definition) {
    return this.options[type + "s"][id];
  } else {
    {
      if (type === "component" && config.isReservedTag(id)) {
        warn(
          "Do not use built-in or reserved HTML elements as component " +
            "id: " +
            id
        );
      }
    }

    if (type === "component" && isPlainObject(definition)) {
      definition.name = definition.name || id;
      definition = this.options._base.extend(definition);
    }

    if (type === "directive" && typeof definition === "function") {
      definition = {
        bind: definition,
        update: definition
      };
    }

    this.options[type + "s"][id] = definition;
    return definition;
  }
}
