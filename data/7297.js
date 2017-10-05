{
  if (!isAttributeNameSafe(name) || value == null) {
    return "";
  }

  return name + "=" + quoteAttributeValueForBrowser(value);
}
