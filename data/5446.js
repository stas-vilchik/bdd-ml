{
  if (typeof value === "string") {
    value = Buffer.from(value);
  }

  if (Buffer.isBuffer(value)) {
    value = toTypedArray(value);
  }

  return value;
}
