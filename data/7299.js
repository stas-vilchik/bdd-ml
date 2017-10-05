{
  var Injection = DOMPropertyInjection;
  var Properties = domPropertyConfig.Properties || {};
  var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
  var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
  var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

  for (var propName in Properties) {
    invariant(
      !DOMProperty.properties.hasOwnProperty(propName),
      "injectDOMPropertyConfig(...): You're trying to inject DOM property " +
        "'%s' which has already been injected. You may be accidentally " +
        "injecting the same DOM property config twice, or you may be " +
        "injecting two configs that have conflicting property names.",
      propName
    );
    var lowerCased = propName.toLowerCase();
    var propConfig = Properties[propName];
    var propertyInfo = {
      attributeName: lowerCased,
      attributeNamespace: null,
      propertyName: propName,
      mutationMethod: null,
      mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
      hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
      hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
      hasPositiveNumericValue: checkMask(
        propConfig,
        Injection.HAS_POSITIVE_NUMERIC_VALUE
      ),
      hasOverloadedBooleanValue: checkMask(
        propConfig,
        Injection.HAS_OVERLOADED_BOOLEAN_VALUE
      ),
      hasStringBooleanValue: checkMask(
        propConfig,
        Injection.HAS_STRING_BOOLEAN_VALUE
      )
    };
    invariant(
      propertyInfo.hasBooleanValue +
        propertyInfo.hasNumericValue +
        propertyInfo.hasOverloadedBooleanValue <=
        1,
      "DOMProperty: Value can be one of boolean, overloaded boolean, or " +
        "numeric value, but not a combination: %s",
      propName
    );

    if (DOMAttributeNames.hasOwnProperty(propName)) {
      var attributeName = DOMAttributeNames[propName];
      propertyInfo.attributeName = attributeName;
    }

    if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
      propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
    }

    if (DOMMutationMethods.hasOwnProperty(propName)) {
      propertyInfo.mutationMethod = DOMMutationMethods[propName];
    }

    DOMProperty.properties[propName] = propertyInfo;
  }
}
