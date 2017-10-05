{
  let mocks, useCounts;
  let projects = [];
  const keywords = this.checkQuery('keywords').value;
  const pageSize = this.checkQuery('page_size').empty().toInt().gt(0).default(config.get('pageSize')).value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  if (keywords) {
    const keyExp = new RegExp(keywords);
    const where = {
      $or: [{
        url: keyExp
      }, {
        description: keyExp
      }, {
        name: keyExp
      }]
    };
    const projects = yield ProjectModel.find(where, {
      limit: pageSize
    });
    mocks = yield MockProxy.find({
      project: {
        $in: projects.map(o => o.id)
      }
    });
    useCounts = yield getUseCount(pageSize, mocks.map(o => o._id));
  } else {
    useCounts = yield getUseCount(pageSize);
    mocks = yield MockProxy.find({
      _id: {
        $in: useCounts.map(o => o.mock)
      }
    });
  }

  mocks.forEach(mock => {
    const project = mock.project;
    const projectId = project.id;

    const exProject = _.find(projects, ['id', projectId]);

    const mockTotal = useCounts.filter(o => o.mock.toString() === mock.id)[0];

    if (exProject && mockTotal && mockTotal.total) {
      exProject.total += mockTotal.total;
    } else if (!exProject) {
      projects.push({
        id: projectId,
        name: project.name,
        description: project.description,
        total: mockTotal && mockTotal.total || 0
      });
    }
  });
  projects = _.sortBy(projects, [o => -o.total]);
  this.body = this.util.resuccess(projects);
}