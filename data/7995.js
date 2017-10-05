{
  process.env.NODE_ENV !== "production" &&
    warn(
      "Failed to resolve async component: " +
        String(factory) +
        (reason ? "\nReason: " + reason : "")
    );

  if (isDef(factory.errorComp)) {
    factory.error = true;
    forceRender();
  }
}
