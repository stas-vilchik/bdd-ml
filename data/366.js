{
  try {
    status = 200;
    result = {
      url: req.url,
      data: data ? JSON.parse(data) : undefined,
      method: req.method,
      headers: req.headers
    };
  } catch (e) {
    console.error("Error:", e.message);
    status = 400;
    result = {
      error: e.message
    };
  }

  res.writeHead(status, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify(result));
}
