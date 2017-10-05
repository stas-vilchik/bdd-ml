{
  response.setHeader("Content-Type", mime.lookup(filename));
  response.writeHead(200);
  const fileStream = createReadStream(filename);
  fileStream.pipe(response);
  fileStream.on("finish", response.end);
}
