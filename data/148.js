{
  return (
    ("undefined" == typeof navigator || "ReactNative" !== navigator.product) &&
    "undefined" != typeof window &&
    "undefined" != typeof document
  );
}
