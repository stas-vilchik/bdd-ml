{
  const query = this.query || {};
  const body = this.request.body || {};
  const method = this.method.toLowerCase();

  const urlArr = _.filter(this.path.split('/'));

  const userName = urlArr[1];
  const projectUrl = `/${urlArr[2]}`;
  const callbackName = query.jsonp_param_name && (query[query.jsonp_param_name] || 'callback');
  let data;
  let mocks;
  let reqUrl = `/${urlArr.slice(3).join('/')}`;

  if (urlArr.length < 2) {
    this.throw(404);
  }

  try {
    let project;

    if (userName.length === 24) {
      project = yield projectProxy.findOne({
        _id: userName
      });
      reqUrl = project.url === '/' ? `/${urlArr.slice(2).join('/')}` : `/${urlArr.slice(2).join('/')}`.replace(project.url, '');
    } else {
      const user = yield userProxy.getByName(userName);
      project = yield projectProxy.findOne({
        user: user.id,
        url: projectUrl
      });
    }

    mocks = yield mockProxy.find({
      project: project.id,
      method
    });
  } catch (e) {
    this.throw(404);
  }

  mocks = mocks.filter(item => {
    const url = item.url.replace(/{/g, ':').replace(/}/g, '');
    return pathToRegexp(url).test(reqUrl);
  });

  if (_.isEmpty(mocks)) {
    this.throw(404);
  }

  const mock = mocks[0];

  Mock.Handler.function = function (options) {
    const mockUrl = mock.url.replace(/{/g, ':').replace(/}/g, '');
    options.Mock = Mock;
    options._req = this.request;
    options._req.params = getParams(mockUrl, reqUrl);
    options._req.cookies = this.cookies.get.bind(this);
    return options.template.call(options.context.currentContext, options);
  }.bind(this);

  if (/^http(s)?/.test(mock.mode)) {
    const proxy = mock.mode.split('?');
    const url = new URL(proxy[0]);

    const queryString = _.assign({}, qs.parse(proxy[1]), query);

    const params = getParams(mock.url, reqUrl);
    const pathname = pathToRegexp.compile(url.pathname)(params);

    try {
      data = yield axios({
        method: method,
        url: url.origin + pathname,
        params: queryString,
        data: body,
        timeout: 10000
      }).then(res => res.data);
    } catch (error) {
      this.body = this.util.refail(error.message || '无法完成代理请求');
      return;
    }

    yield mockCountProxy.newAndSave(mock.id);

    if (callbackName) {
      this.type = 'text/javascript';
      this.body = `${callbackName}(${JSON.stringify(data, null, 2)})`;
      this.body = this.body.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
    } else {
      this.body = data;
    }

    return;
  }

  const vm = new VM({
    timeout: 2000,
    sandbox: {
      Mock: Mock,
      mode: mock.mode,
      template: new Function("return " + mock.mode)()
    }
  });

  try {
    vm.run('Mock.mock(new Function("return " + mode)())');
    data = vm.run('Mock.mock(template)');
    yield mockCountProxy.newAndSave(mock.id);

    if (data._res) {
      let _res = data._res;

      if (_res.cookies) {
        for (let i in _res.cookies) {
          if (_res.cookies.hasOwnProperty(i)) {
            this.cookies.set(i, _res.cookies[i]);
          }
        }
      }

      if (_res.status) {
        this.status = _res.status;
      }

      if (_res.headers) {
        for (let i in _res.headers) {
          if (_res.headers.hasOwnProperty(i)) {
            this.set(i, _res.headers[i]);
          }
        }
      }

      if (_res.status && parseInt(_res.status) !== 200 && _res.data) {
        data = _res.data;
      }

      delete data['_res'];
    }

    if (callbackName) {
      this.type = 'text/javascript';
      this.body = (callbackName + '(' + JSON.stringify(data, null, 2) + ')').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
    } else {
      this.body = data;
    }
  } catch (err) {
    this.body = this.util.refail(err.message || '请检查 Mode 格式是否正确');
  }
}