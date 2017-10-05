{
  if (
    name !== normalizedName &&
    name.toUpperCase() === normalizedName.toUpperCase()
  ) {
    headers[normalizedName] = value;
    delete headers[name];
  }
}
