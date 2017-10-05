{
  if (!context._mappedFiles && context._registeredComponents && this.mapFiles) {
    context._mappedFiles = this.mapFiles(
      Array.from(context._registeredComponents)
    );
  }

  return context._mappedFiles;
}
