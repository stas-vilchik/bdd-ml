{
  let result = cache.get('list');
  const query = {
    create_at: {
      '$gte': new Date(moment().format('YYYY-MM-DD'))
    }
  };

  if (!result) {
    const data = yield Promise.all([UserModel.count(), MockModel.count(), ProjectModel.count(), getUseTotalCount(), UserModel.count(query), MockModel.count(query), ProjectModel.count(query), getUseTotalCount(query)]);
    result = {
      total: {
        userCount: data[0],
        mockCount: data[1],
        projectCount: data[2],
        mockUseCount: data[3]
      },
      today: {
        userCount: data[4],
        mockCount: data[5],
        projectCount: data[6],
        mockUseCount: data[7]
      }
    };
    cache.set('list', result);
  }

  this.body = this.util.resuccess(result);
}