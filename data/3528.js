{
  return MockCountModel.aggregate(
    {
      $match: query
    },
    {
      $group: {
        _id: null,
        total: {
          $sum: "$count"
        }
      }
    }
  ).then(data => (data[0] ? data[0].total : 0));
}
