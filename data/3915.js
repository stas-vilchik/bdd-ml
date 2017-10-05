{
  const { basePath = "/", paths, definitions } = swaggerInfo;
  return mockProxy
    .find({
      project: projectId
    })
    .then(mocks => {
      const newMockList = [];
      const oldMockList = [];
      const promises = [];
      Object.keys(paths).forEach(api => {
        const apiUrl = path.posix.join(basePath, api);
        Object.keys(paths[api]).forEach(method => {
          method = method.toLowerCase();
          let oldMode;
          let newMode;
          const operation = paths[api][method];
          const desc = operation.summary || operation.description;

          const mock = _.find(mocks, {
            method,
            url: apiUrl
          });

          const parameters = JSON.stringify(
            (operation.parameters || []).map(o => getRefModels(o, swaggerInfo))
          );
          const responseModel = JSON.stringify(
            Object.keys(operation.responses).map(code => {
              const res = operation.responses[code];
              res.code = code;
              return getRefModels(res, swaggerInfo);
            })
          );

          const response = _.get(operation, 'responses["200"].schema');

          const mode = createMode(definitions, response);

          if (!mock) {
            newMockList.push({
              mode,
              method,
              url: apiUrl,
              parameters,
              response_model: responseModel,
              description: desc,
              project: projectId
            });
            return;
          }

          try {
            newMode = JSON.parse(mode);
            oldMode = JSON.parse(mock.mode);
            let newKeys = Object.keys(flatnest.flatten(newMode));
            let oldKeys = Object.keys(flatnest.flatten(oldMode));
            newKeys = newKeys.filter(item => !/\[[1-9]\]/.test(item));
            oldKeys = oldKeys.filter(item => !/\[[1-9]\]/.test(item));
            oldKeys = oldKeys.map(o => o.replace(/(\|[^\[\.]*)/g, ""));
            mock.mode = _.xor(newKeys, oldKeys).length > 0 ? mode : mock.mode;
          } catch (e) {
            mock.mode = mode || mock.mode;
          }

          mock.url = apiUrl || mock.url;
          mock.method = method || mock.method;
          mock.description = desc || mock.description;

          const mockDiff = _.xor(
            [
              mock.url,
              mock.method,
              mock.description,
              mock.mode,
              mock.parameters,
              mock.response_model
            ],
            [
              apiUrl,
              method,
              desc,
              JSON.stringify(oldMode),
              parameters,
              responseModel
            ]
          );

          if (mockDiff.length > 0) {
            mock.parameters = parameters;
            mock.response_model = responseModel;
            oldMockList.push(mock);
          }
        });
      });

      if (newMockList.length > 0) {
        promises.push(mockProxy.newAndSave(newMockList));
      }

      if (oldMockList.length > 0) {
        promises.push(mockProxy.updateMany(oldMockList));
      }

      return Promise.all(promises);
    });
}
