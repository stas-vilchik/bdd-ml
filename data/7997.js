{
  if (isUndef(factory.resolved)) {
    reject(
      process.env.NODE_ENV !== "production"
        ? "timeout (" + res.timeout + "ms)"
        : null
    );
  }
}
