{
  const uid = this.state.user.id;
  const group = this.checkQuery('group').value;
  const pageSize = this.checkQuery('page_size').empty().toInt().gt(0).default(config.get('pageSize')).value;
  const pageIndex = this.checkQuery('page_index').empty().toInt().gt(0).default(1).value;
  const type = this.checkQuery('type').empty().toLow().in(['workbench']).value;
  const filterByAuthor = this.checkQuery('filter_by_author').empty().toInt().default(0).value;
  const keywords = this.checkQuery('keywords').value;
  let projects;
  let baseWhere;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const opt = {
    skip: (pageIndex - 1) * pageSize,
    limit: pageSize,
    sort: '-create_at'
  };

  if (group) {
    baseWhere = [{
      group
    }];
  } else {
    if (filterByAuthor === 0) {
      baseWhere = [{
        user: uid
      }, {
        members: {
          $elemMatch: {
            $eq: uid
          }
        }
      }];
    } else if (filterByAuthor === 1) {
      baseWhere = [{
        user: uid
      }];
    } else {
      baseWhere = [{
        members: {
          $elemMatch: {
            $eq: uid
          }
        }
      }];
    }
  }

  let where = {
    $or: baseWhere
  };

  if (keywords) {
    const keyExp = new RegExp(keywords, 'i');
    where = {
      $and: [{
        $or: baseWhere
      }, {
        $or: [{
          url: keyExp
        }, {
          description: keyExp
        }, {
          name: keyExp
        }]
      }]
    };
  }

  switch (type) {
    case 'workbench':
      projects = yield userProjectProxy.find({
        user: uid,
        is_workbench: true
      });
      projects = projects.map(item => item.project);
      projects = yield projectProxy.find(uid, {
        _id: {
          $in: projects
        }
      });
      break;

    default:
      projects = yield projectProxy.find(uid, where, opt);
  }

  projects = _.map(projects, item => {
    item.members = item.members.map(item => _.pick(item, ft.user));
    item.extend = _.pick(item.extend, ft.projectExtend);
    item.user = _.pick(item.user, ft.user);
    return _.pick(item, ['user'].concat(ft.project));
  });
  this.body = this.util.resuccess(projects);
}