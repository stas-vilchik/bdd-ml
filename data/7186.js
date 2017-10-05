{
  var definition = options || {};

  if (!name) {
    throw new Error(
      "document.registerElement: first argument `name` must not be empty"
    );
  }

  if (name.indexOf("-") < 0) {
    throw new Error(
      "document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" +
        String(name) +
        "'."
    );
  }

  if (isReservedTag(name)) {
    throw new Error(
      "Failed to execute 'registerElement' on 'Document': Registration failed for type '" +
        String(name) +
        "'. The type name is invalid."
    );
  }

  if (getRegisteredDefinition(name)) {
    throw new Error(
      "DuplicateDefinitionError: a type with name '" +
        String(name) +
        "' is already registered"
    );
  }

  if (!definition.prototype) {
    definition.prototype = Object.create(HTMLElement.prototype);
  }

  definition.__name = name.toLowerCase();
  definition.lifecycle = definition.lifecycle || {};
  definition.ancestry = ancestry(definition.extends);
  resolveTagName(definition);
  resolvePrototypeChain(definition);
  overrideAttributeApi(definition.prototype);
  registerDefinition(definition.__name, definition);
  definition.ctor = generateConstructor(definition);
  definition.ctor.prototype = definition.prototype;
  definition.prototype.constructor = definition.ctor;

  if (scope.ready) {
    upgradeDocumentTree(document);
  }

  return definition.ctor;
}
