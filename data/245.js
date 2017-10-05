{
  console.log("POST data received");
  res.writeHead(200, {
    "Content-Type": "text/json"
  });
  res.write(JSON.stringify(data));
  res.end();
}
