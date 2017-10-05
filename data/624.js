{
  jasmine.Ajax.uninstall();
  axios.interceptors.request.handlers = [];
  axios.interceptors.response.handlers = [];
}
