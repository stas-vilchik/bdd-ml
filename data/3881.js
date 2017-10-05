{
  prefix = prefix || "";
  return function(method, url, token, body) {
    return new Promise((resolve, reject) => {
      request[method](`${prefix}${url}`)
        .set("Authorization", `Bearer ${token || ""}`)
        .send(body || {})
        .expect(200, (err, res) => (err ? reject(err) : resolve(res.body)));
    });
  };
}
