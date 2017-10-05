{
  const logDir = path.join(__dirname, "../logs");

  if (!fs.existsSync(logDir)) {
    mkdirp.sync(logDir);
  }

  if (logger) {
    return logger;
  }

  logger = bunyan.createLogger({
    name: "easy-mock",
    serializers: bunyan.stdSerializers,
    streams: [
      {
        level: "info",
        stream: process.stdout
      },
      {
        type: "rotating-file",
        level: "error",
        count: 3,
        path: path.join(logDir, "error.log")
      }
    ]
  });
  return logger;
}
