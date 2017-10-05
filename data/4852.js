{
  const e = mockEmitters[dirPath];
  e.emit("all", "delete", filePath, dirPath, undefined);
}
