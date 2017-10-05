{
  const query = [
    {
      $group: {
        _id: {
          mock: "$mock"
        },
        total: {
          $sum: "$count"
        }
      }
    },
    {
      $project: {
        _id: 0,
        mock: "$_id.mock",
        total: 1
      }
    },
    {
      $sort: {
        total: -1
      }
    },
    {
      $limit: pageSize
    }
  ];

  if (mocks) {
    query.unshift({
      $match: {
        mock: {
          $in: mocks
        }
      }
    });
  }

  return MockCountModel.aggregate(query);
}
