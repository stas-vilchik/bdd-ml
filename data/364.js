{
  if (type) {
    res.writeHead(200, {
      "Content-Type": type
    });
  }

  fs.createReadStream(path.join(__dirname, file)).pipe(res);
}
