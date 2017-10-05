{
  let r = {};

  if (params) {
    params.url = params.url.split("?")[0];
    r.url = `${params.url}${path}`;
    r.headers = params.headers;
  } else {
    r = path;
  }

  r.url = `${r.url}?t=${_.now()}`;
  return axios(r).then(res => res.data);
}
