{
  if (!res.result) {
    reject(new Error("failed to get rect for element: " + el.tag));
  } else {
    resolve(res.size);
  }
}
